// Run from repository root. Uses external QA tooling; installs no project packages.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createServer } from 'vite';

const { chromium } = await import(process.env.P27_PLAYWRIGHT_MODULE || 'playwright');
const output = path.resolve('docs/qa/block02');
const report = { browser: '', fontDelivery: 'browser network', viewports: [], checks: [], consoleErrors: [], failedRequests: [] };
const exec = promisify(execFile);
const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
await server.listen();
const origin = `http://127.0.0.1:${server.httpServer.address().port}`;
const url = `${origin}/src/portfolio2027/preview.html`;
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.P27_CHROMIUM_EXECUTABLE || undefined,
  args: JSON.parse(process.env.P27_CHROMIUM_ARGS || '["--no-sandbox"]'),
});
report.browser = browser.version();
const context = await browser.newContext();

// Optional environment workaround: the browser's CA store here cannot validate
// the outbound proxy. Curl validates TLS normally, then supplies unchanged official
// font responses. Never disable certificate validation or ship these test files.
if (process.env.P27_FONT_CSS) {
  const css = await fs.readFile(process.env.P27_FONT_CSS, 'utf8');
  const fontFiles = new Map();
  await Promise.all([...css.matchAll(/url\((https:[^)]+)\)/g)].map(async ([, fontUrl]) => {
    assert.equal(new URL(fontUrl).hostname, 'fonts.gstatic.com');
    const cache = `/tmp/p27-font-cache/${path.basename(new URL(fontUrl).pathname)}`;
    let bytes;
    try { bytes = await fs.readFile(cache); }
    catch { bytes = (await exec('curl', ['--fail', '--silent', '--show-error', '--max-time', '30', fontUrl], { encoding: 'buffer', maxBuffer: 3000000 })).stdout; }
    fontFiles.set(fontUrl, bytes);
  }));
  await context.route('https://fonts.googleapis.com/**', route => route.fulfill({ contentType: 'text/css', body: css }));
  await context.route('https://fonts.gstatic.com/**', route => route.fulfill({ contentType: 'font/ttf', headers: {'access-control-allow-origin':'*'}, body: fontFiles.get(route.request().url()) }));
  report.fontDelivery = 'Official CSS/TTF responses via TLS-validated curl, test-only request fulfillment; direct browser delivery not verified in this proxy environment';
}

await context.addInitScript(() => {
  window.__p27Samples = [];
  window.__p27Draws = 0;
  window.__p27Shifts = [];
  new PerformanceObserver(list => {
    for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__p27Shifts.push(entry.value);
  }).observe({ type: 'layout-shift', buffered: true });
  const clear = CanvasRenderingContext2D.prototype.clearRect;
  CanvasRenderingContext2D.prototype.clearRect = function (...args) {
    window.__p27Draws += 1;
    return clear.apply(this, args);
  };
  const raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = callback => raf(time => {
    const count = window.__p27Draws;
    const start = performance.now();
    callback(time);
    if (window.__p27Draws > count) window.__p27Samples.push(performance.now() - start);
  });
});
const page = await context.newPage();
page.on('pageerror', error => report.consoleErrors.push(error.message));
page.on('console', message => { if (message.type() === 'error') report.consoleErrors.push(message.text()); });
page.on('requestfailed', request => report.failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
async function until(fn, message) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (await fn()) return;
    await page.waitForTimeout(25);
  }
  console.log('FAIL_STATE', await page.evaluate(()=>({hash:location.hash,active:document.activeElement?.id,y:scrollY,header:document.querySelector('header')?.offsetHeight,aboutTop:document.querySelector('#about')?.getBoundingClientRect().top,scrollMargin:document.querySelector('#about')&&getComputedStyle(document.querySelector('#about')).scrollMarginTop,fonts:document.fonts.status})));
  throw new Error(message);
}
function pass(message) { report.checks.push(message); console.log('PASS', message); }
try {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const [width, height] of [[1920,1080],[1920,960],[1920,900],[1536,864],[1366,768],[768,1024],[390,844],[320,844]]) {
    await page.setViewportSize({ width, height });
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);
    await until(() => page.locator('canvas').getAttribute('data-state').then(state => state === 'static'), 'Static ASCII did not initialize');
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      compact: document.querySelector('header').dataset.compact,
      fonts: [...document.fonts].filter(font => font.status === 'loaded').map(font => `${font.family} ${font.weight} ${font.style}`),
      cls: window.__p27Shifts.reduce((sum, value) => sum + value, 0),
      geometry: [...document.querySelectorAll('.p27-hero-role,.p27-first-name,.p27-last-name,.p27-hero-description,.p27-hero-closing')].map(element => {
        const box = element.getBoundingClientRect();
        return { className: element.className, x: box.x, y: box.y, width: box.width, height: box.height };
      }),
    }));
    assert.ok(metrics.scrollWidth <= width + 1, `Overflow at ${width}`);
    assert.ok(metrics.fonts.some(font => font.includes('Instrument Serif') && font.includes('italic')), 'Official serif not loaded');
    assert.ok(metrics.fonts.some(font => font.includes('DM Sans')), 'Official sans not loaded');
    await page.screenshot({ path: path.join(output, `hero-${width}x${height}.png`) });
    report.viewports.push({ width, height, ...metrics });
  }
  pass('8 reference viewports: official fonts loaded, no horizontal overflow, static reduced-motion ASCII');

  await page.setViewportSize({width:1366,height:768});
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole('navigation', { name: 'Principal', exact: true }).getByRole('link', {name:'Proyectos'}).click();
  await until(() => page.evaluate(() => location.hash === '#projects' && document.activeElement.id === 'projects'), 'Desktop destination/focus');
  assert.ok(Math.abs(await page.locator('#projects').evaluate(element => element.getBoundingClientRect().top) - 80) < 2);
  assert.equal(await page.locator('header').evaluate(element => element.getBoundingClientRect().top), 0);
  pass('Desktop anchor, focus, 80px offset and sticky header');
  await page.goBack();
  await until(() => page.evaluate(() => !location.hash && scrollY < 2), 'Back failed');
  await page.goForward();
  await until(() => page.evaluate(() => location.hash === '#projects' && document.activeElement.id === 'projects'), 'Forward failed');
  await page.evaluate(() => document.querySelector('#skills').scrollIntoView());
  await until(() => page.locator('.p27-nav-desktop a[href="#skills"]').getAttribute('aria-current').then(value => value === 'location'), 'Passive active-section signal');
  assert.equal(await page.evaluate(() => location.hash), '#projects');
  pass('Back/Forward and passive active section without hash changes');

  await page.setViewportSize({width:390,height:844});
  await page.goto(`${url}#about`);
  await page.evaluate(() => document.fonts.ready);
  await until(() => page.evaluate(() => document.activeElement.id === 'about' && Math.abs(document.querySelector('#about').getBoundingClientRect().top-72)<2), 'Direct hash did not focus/position target');
  assert.ok(Math.abs(await page.locator('#about').evaluate(element => element.getBoundingClientRect().top) - 72) < 2);
  pass('Direct mobile hash and 72px offset');
  const control = page.getByRole('button', {name:/Menú/});
  await control.click();
  assert.equal(await page.getByRole('button', {name:/Cerrar/}).getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), '#hero');
  await page.keyboard.press('Escape');
  assert.equal(await control.getAttribute('aria-expanded'), 'false');
  assert.equal(await page.evaluate(() => document.activeElement.tagName), 'BUTTON');
  pass('Mobile disclosure, aria-expanded, keyboard entry, Escape and restored control focus');
  await control.press('Enter');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await until(() => page.evaluate(() => location.hash === '#projects' && document.activeElement.id === 'projects'), 'Keyboard mobile selection');
  assert.equal(await control.getAttribute('aria-expanded'), 'false');
  pass('Keyboard section selection closes disclosure and focuses destination');
  await control.click();
  await page.locator('#projects').click();
  assert.equal(await control.getAttribute('aria-expanded'), 'false');
  pass('Outside pointer closes without modal/backdrop');
  await page.goto(url);
  await control.click();
  for (let i=0; i<6; i+=1) await page.keyboard.press('Tab');
  assert.equal(await control.getAttribute('aria-expanded'), 'false');
  assert.equal(await page.evaluate(() => document.activeElement.className), 'p27-primary-action');
  assert.equal(await page.locator('.p27-primary-action').evaluate(element => getComputedStyle(element).outlineStyle), 'solid');
  pass('Tab exits disclosure without focus trap; visible focus ring');
  await control.click();
  await page.screenshot({path:path.join(output,'navigation-mobile-open.png')});

  await page.setViewportSize({width:320,height:360});
  await page.goto(url);
  await control.click();
  await page.getByRole('navigation', {name:'Principal compacta'}).getByRole('link',{name:'Contacto'}).click();
  await until(() => page.evaluate(() => document.activeElement.id === 'contact'), 'Short-screen panel scroll');
  pass('320x360 disclosure scroll keeps final link reachable');
  await page.goto(url);
  await page.evaluate(() => {document.documentElement.style.fontSize='200%';});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(100);
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth+1), '200% text overflow');
  await page.screenshot({path:path.join(output,'text-200-percent-320.png')});
  pass('320px at 200% root text: content reflows without horizontal overflow');

  await page.setViewportSize({width:1366,height:768});
  await page.goto(url);
  await page.emulateMedia({reducedMotion:'no-preference'});
  await until(() => page.locator('canvas').getAttribute('data-state').then(value=>value==='running'), 'ASCII not running');
  await page.waitForTimeout(2200);
  const samples=await page.evaluate(()=>window.__p27Samples);
  const sorted=[...samples].sort((a,b)=>a-b);
  report.asciiDesktop={samples:samples.length,meanMs:samples.reduce((a,b)=>a+b,0)/samples.length,p95Ms:sorted[Math.floor(sorted.length*.95)],maxMs:sorted.at(-1)};
  assert.ok(samples.length>=8 && samples.length<=35, 'ASCII cadence/StrictMode cleanup unexpectedly duplicated');
  await page.locator('#contact').evaluate(element=>element.scrollIntoView());
  await until(()=>page.locator('canvas').getAttribute('data-state').then(value=>value==='paused'),'Offscreen pause');
  const before=await page.evaluate(()=>window.__p27Draws);await page.waitForTimeout(400);
  assert.equal(await page.evaluate(()=>window.__p27Draws),before);
  pass('Animated ASCII runs at bounded cadence; no draws offscreen');
  await page.evaluate(()=>window.scrollTo(0,0));
  await until(()=>page.locator('canvas').getAttribute('data-state').then(value=>value==='running'),'Resume on entry');
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});
  const hiddenBefore=await page.evaluate(()=>window.__p27Draws);await page.waitForTimeout(400);
  assert.equal(await page.evaluate(()=>window.__p27Draws),hiddenBefore);
  await page.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
  await until(()=>page.locator('canvas').getAttribute('data-state').then(value=>value==='running'),'Resume after visibility simulation');
  pass('Simulated visibilitychange stops/resumes ASCII draws');
  await page.emulateMedia({reducedMotion:'reduce'});
  await until(()=>page.locator('canvas').getAttribute('data-state').then(value=>value==='static'),'Reduced-motion static state');
  const staticBefore=await page.evaluate(()=>window.__p27Draws);await page.waitForTimeout(400);
  assert.equal(await page.evaluate(()=>window.__p27Draws),staticBefore);
  pass('Changing reduced-motion preference stops scheduling and renders static field');

  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({reducedMotion:'no-preference'});
  await until(()=>page.locator('canvas').getAttribute('data-state').then(value=>value==='running'),'Mobile ASCII resume');
  await page.evaluate(()=>{window.__p27Samples=[];});
  await page.waitForTimeout(1800);
  const mobileSamples=await page.evaluate(()=>window.__p27Samples);
  const mobileSorted=[...mobileSamples].sort((a,b)=>a-b);
  report.asciiMobile={samples:mobileSamples.length,meanMs:mobileSamples.reduce((a,b)=>a+b,0)/mobileSamples.length,p95Ms:mobileSorted[Math.floor(mobileSorted.length*.95)],maxMs:mobileSorted.at(-1)};
  await page.evaluate(()=>Object.defineProperty(window,'devicePixelRatio',{configurable:true,value:3}));
  await page.setViewportSize({width:391,height:844});
  await page.waitForTimeout(100);
  report.simulatedDpr3=await page.locator('canvas').evaluate(element=>({internalWidth:element.width,cssWidth:element.getBoundingClientRect().width}));
  assert.ok(report.simulatedDpr3.internalWidth/report.simulatedDpr3.cssWidth <= 1.26);
  pass('Mobile ASCII sampled; simulated DPR 3 remains capped near 1.25');

  const fallback=await context.newPage();
  await fallback.addInitScript(()=>{HTMLCanvasElement.prototype.getContext=()=>null;});
  await fallback.route('https://fonts.googleapis.com/**',route=>route.abort());
  await fallback.setViewportSize({width:320,height:844});
  await fallback.goto(url);await fallback.evaluate(()=>document.fonts.ready);
  assert.equal(await fallback.locator('canvas').getAttribute('data-state'),'unavailable');
  assert.ok(await fallback.getByRole('link',{name:'Explorar proyectos'}).isVisible());
  assert.ok(await fallback.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await fallback.screenshot({path:path.join(output,'fallback-320.png')});
  await fallback.close();
  pass('Font request and Canvas failure retain readable content/actions without overflow');
  const nojs=await browser.newContext({javaScriptEnabled:false});const nojsPage=await nojs.newPage();
  await nojsPage.goto(url);assert.ok(await nojsPage.getByRole('heading',{name:'Ezequiel Gonzalez'}).isVisible());
  pass('HTML fallback preserves copy and anchor targets without JavaScript');
  assert.deepEqual(report.consoleErrors,[]);
  assert.deepEqual(report.failedRequests,[]);
  pass('No page/console errors or failed requests in normal QA context');
} catch(error) {
  report.failure=error.stack;
  process.exitCode=1;
  console.error(error);
} finally {
  await fs.writeFile(path.join(output,'results.json'),JSON.stringify(report,null,2)+'\n');
  await browser.close();await server.close();
}
