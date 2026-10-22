// Run from repository root; Playwright/Chromium are external QA tooling, not app dependencies.
import { createServer } from 'vite';
const { chromium } = await import(process.env.P27_PLAYWRIGHT_MODULE || 'playwright');
import fs from 'node:fs';import assert from 'node:assert/strict';
const cwd=process.cwd();
const out=`${cwd}/docs/qa/block03`;fs.mkdirSync(out,{recursive:true});
const server=await createServer({root:cwd,server:{host:'127.0.0.1',port:0}});await server.listen();
const browser=await chromium.launch({headless:true,args:JSON.parse(process.env.P27_CHROMIUM_ARGS || '["--no-sandbox"]'),executablePath:process.env.P27_CHROMIUM_EXECUTABLE});
const context=await browser.newContext({reducedMotion:'reduce'});const css=fs.readFileSync(process.env.P27_FONT_CSS,'utf8');const files=new Map();
for(const [,url] of css.matchAll(/url\((https:[^)]+)\)/g))files.set(url,fs.readFileSync((process.env.P27_FONT_CACHE || '/tmp/p27-font-cache')+'/'+url.split('/').pop()));
await context.route('https://fonts.googleapis.com/**',r=>r.fulfill({contentType:'text/css',body:css}));
await context.route('https://fonts.gstatic.com/**',r=>r.fulfill({contentType:'font/ttf',headers:{'access-control-allow-origin':'*'},body:files.get(r.request().url())}));
let page=await context.newPage();const report={browser:browser.version(),viewports:[],checks:[],errors:[],performance:[]};page.on('pageerror',e=>report.errors.push(e.message));
const url=`http://127.0.0.1:${server.httpServer.address().port}/src/portfolio2027/preview.html`;
const pass=message=>{report.checks.push(message);console.log('PASS',message)};
const state=()=>page.locator('#projects').getAttribute('data-construction');
async function load(hash=''){await page.goto(url+hash);await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(160);}
async function geometry(){return page.evaluate(()=>{
 const s=document.querySelector('#projects'),f=s.querySelector('.p27-work-frame'),boxes=[...s.querySelectorAll('article')].map(e=>{const b=e.getBoundingClientRect();return {x:b.x,y:b.y,w:b.width,h:b.height}});
 return {width:innerWidth,overflow:document.documentElement.scrollWidth,height:s.offsetHeight,frameWidth:f.offsetWidth,projects:boxes,links:[...s.querySelectorAll('a')].map(a=>({url:a.href,h:a.offsetHeight})),state:s.dataset.construction,headingTop:s.querySelector('h2').getBoundingClientRect().top};
});}
try{
for(const [width,height] of [[1920,1080],[1536,864],[1366,768],[768,1024],[390,844],[320,844]]){
 await page.setViewportSize({width,height});await load('#projects');
 const metrics=await geometry();assert.equal(metrics.overflow,width);assert.equal(metrics.links.length,4);assert.ok(metrics.links.every(a=>a.h>=52));assert.equal(metrics.state,'final');
 if(width>=1024){assert.equal(metrics.projects[0].y,metrics.projects[1].y);assert.ok(metrics.projects[1].x>metrics.projects[0].x);}else assert.ok(metrics.projects[1].y>metrics.projects[0].y+metrics.projects[0].h);
 await page.evaluate(()=>document.activeElement?.blur());await page.locator('#projects').screenshot({path:`${out}/selected-work-${width}.png`});report.viewports.push(metrics);
}pass('Six responsive widths: two projects, layout, targets >=52px, no overflow, immediate reduced-motion/hash final');
await page.setViewportSize({width:1920,height:1080});await load();
await page.screenshot({path:`${out}/hero-continuity-1920.png`});
await page.evaluate(()=>window.scrollTo(0,750));await page.waitForTimeout(50);await page.screenshot({path:`${out}/continuity-1920.png`});
await load('#projects');assert.equal(await page.evaluate(()=>document.activeElement.id),'projects-title');const top=await page.locator('#projects').evaluate(e=>e.getBoundingClientRect().top);assert.ok(Math.abs(top-80)<2);pass('Direct #projects focuses heading with header offset 80px');
await page.locator('.p27-project-actions a').first().focus();assert.equal(await page.evaluate(()=>getComputedStyle(document.activeElement).outlineWidth),'2px');pass('Project links receive visible keyboard focus');
await page.locator('.p27-project-actions a').first().hover();assert.ok((await page.locator('.p27-project-actions a').first().evaluate(e=>getComputedStyle(e).textDecorationLine)).includes('underline'));pass('Explicit link hover underline');
await page.setViewportSize({width:320,height:844});await page.evaluate(()=>document.documentElement.style.fontSize='200%');await page.waitForTimeout(100);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),320);await page.evaluate(()=>document.documentElement.style.fontSize='');pass('320px with 200% root text reflows without horizontal overflow');
await page.emulateMedia({reducedMotion:'no-preference'});
// Capture real motion in its viewport. Full-page capture emits resize events,
// correctly cancelling the product effect; use a separate controlled page instead.
for(const [width,height] of [[1920,1080],[390,844]]){
 const mp=await context.newPage();await mp.bringToFront();await mp.setViewportSize({width,height});await mp.emulateMedia({reducedMotion:'no-preference'});await mp.goto(url);await mp.evaluate(()=>document.fonts.ready);await mp.waitForTimeout(200);await mp.clock.install({time:new Date("2026-10-22T12:00:00Z")});await mp.clock.pauseAt(new Date("2026-10-22T12:00:01Z"));
 await mp.evaluate(()=>window.scrollTo(0,document.querySelector('#projects').offsetTop-innerHeight*.8));await mp.waitForTimeout(35);await mp.clock.runFor(40);
 for(let i=0;i<12;i++){const top=await mp.locator('#projects').evaluate(e=>e.getBoundingClientRect().top);if(top<=80)break;await mp.evaluate(()=>window.scrollBy(0,Math.min(100,document.querySelector('#projects').getBoundingClientRect().top-80)));await mp.waitForTimeout(35);await mp.clock.runFor(16);}
 const durations=width>=1024?[20,400,960,360,1000]:[0,180,550,220,550];
 const phases=['points','geometry','skeleton','materialization','final'];
 for(let i=0;i<5;i++){
  await mp.clock.runFor(durations[i]);const current=await mp.locator('#projects').getAttribute('data-construction');console.log('PHASE',width,i,current,await mp.locator('#projects').getAttribute('data-construction-reason'));assert.equal(current,phases[i]);
  await mp.screenshot({path:`${out}/motion-${width}-${i+1}-${current}.png`});
 }
 assert.equal(await mp.locator('.p27-construction').count(),0);pass(`Five distinct construction phases and overlay removal ${width}px`);
 await mp.evaluate(()=>window.scrollTo(0,0));await mp.clock.runFor(50);await mp.evaluate(()=>window.scrollTo(0,document.querySelector('#projects').offsetTop-innerHeight*.8));await mp.clock.runFor(100);assert.equal(await mp.locator('#projects').getAttribute('data-construction'),'final');pass(`No replay on scroll return ${width}px`);await mp.clock.resume();await mp.close();
}
// Each independent load exercises a real cancellation path.
async function active(width=1366){await page.bringToFront();await page.setViewportSize({width,height:768});await load();await page.evaluate(()=>window.scrollTo(0,document.querySelector('#projects').offsetTop-innerHeight*.8));await page.waitForTimeout(80);assert.notEqual(await state(),'final');}
await active();await page.locator('#projects-title').focus();assert.equal(await state(),'final');pass('Focus cancels to final');
await active();await page.locator('a.p27-nav-identity').click();assert.equal(await state(),'final');pass('Internal anchor cancels to final');
await active();await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(60);assert.equal(await state(),'final');await page.emulateMedia({reducedMotion:'no-preference'});pass('Preference change cancels to final');
await active();await page.setViewportSize({width:768,height:1024});await page.waitForTimeout(60);assert.equal(await state(),'final');pass('Resize during construction cancels stale geometry');
await active();await page.evaluate(()=>window.scrollBy(0,1000));await page.waitForTimeout(50);assert.equal(await state(),'final');pass('Fast scroll / section exit cancels to final');
await active();await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});assert.equal(await state(),'final');pass('Hidden-document event cancels to final (simulated)');
await load();await page.evaluate(()=>window.scrollTo(0,document.querySelector('#projects').offsetTop));await page.waitForTimeout(60);assert.equal(await state(),'final');pass('Fast entry bypasses construction');
await page.setViewportSize({width:390,height:844});await load();await page.locator('.p27-nav-toggle').click();await page.locator('.p27-nav-mobile a[href="#projects"]').click();await page.waitForTimeout(80);assert.equal(await state(),'final');assert.equal(await page.evaluate(()=>document.activeElement.id),'projects-title');assert.equal(await page.locator('.p27-nav-toggle').getAttribute('aria-expanded'),'false');pass('Mobile menu navigates to real Projects and closes');
// A fresh context keeps real-clock performance samples independent of the
// virtual clock used solely for phase captures in the previous context.
const perfContext=await browser.newContext({reducedMotion:'no-preference'});
await perfContext.route('https://fonts.googleapis.com/**',r=>r.fulfill({contentType:'text/css',body:css}));
await perfContext.route('https://fonts.gstatic.com/**',r=>r.fulfill({contentType:'font/ttf',headers:{'access-control-allow-origin':'*'},body:files.get(r.request().url())}));
page=await perfContext.newPage();page.on('pageerror',e=>report.errors.push(e.message));await page.bringToFront();
// Measure active effect JS independently of Hero by sampling only its canvas.
await page.addInitScript(()=>{
 window.__p27Frames=[];window.__p27Reads=0;window.__p27Draws=0;window.__p27Builds=[];
 const clear=CanvasRenderingContext2D.prototype.clearRect;CanvasRenderingContext2D.prototype.clearRect=function(...args){if(this.canvas.className==='p27-construction')window.__p27Draws++;return clear.apply(this,args)};
 const IO=window.IntersectionObserver;window.IntersectionObserver=class extends IO{constructor(cb,options){super((entries,observer)=>{const before=document.querySelector('.p27-construction'),start=performance.now();cb(entries,observer);if(!before&&document.querySelector('.p27-construction'))window.__p27Builds.push(performance.now()-start)},options)}};
 const rect=Element.prototype.getBoundingClientRect;Element.prototype.getBoundingClientRect=function(){if(this.closest?.('#projects'))window.__p27Reads++;return rect.call(this)};
 const raf=requestAnimationFrame.bind(window);window.requestAnimationFrame=cb=>raf(t=>{const before=window.__p27Draws,start=performance.now();cb(t);if(window.__p27Draws>before)window.__p27Frames.push(performance.now()-start)});
});
for(const width of [1920,390]){await page.setViewportSize({width,height:1080});await load();const initial=await page.evaluate(()=>window.__p27Reads);await page.evaluate(()=>window.scrollTo(0,document.querySelector('#projects').offsetTop-innerHeight*.8));await page.waitForTimeout(150);const reads=await page.evaluate(()=>window.__p27Reads);await page.waitForTimeout(2800);console.log('PERF_STATE',width,await state(),await page.evaluate(()=>({hidden:document.hidden,draws:window.__p27Draws,frames:window.__p27Frames.length})));assert.equal(await state(),'final');const data=await page.evaluate(()=>({samples:window.__p27Frames,builds:window.__p27Builds,draws:window.__p27Draws,reads:window.__p27Reads,overlay:document.querySelectorAll('.p27-construction').length}));const samples=data.samples.sort((a,b)=>a-b);await page.waitForTimeout(200);assert.equal(await page.evaluate(()=>window.__p27Draws),data.draws);report.performance.push({width,buildMs:data.builds,drawsAfterCompletion:0,frames:samples.length,mean:samples.reduce((a,b)=>a+b,0)/samples.length,p95:samples[Math.floor(samples.length*.95)],max:samples.at(-1),geometryElementReads:reads-initial,readsAfterMeasurement:data.reads-reads,overlay:data.overlay});}
pass('Effect completes with no overlay; no later draws; active JS timings captured');
// Active React unmount, without destroying the browser document.
await load('#projects');await page.evaluate(async()=>{
 const {default:React}=await import('/node_modules/.vite/deps/react.js');const {default:ReactDom}=await import('/node_modules/.vite/deps/react-dom_client.js');const {createRoot}=ReactDom;const {default:SelectedWork}=await import('/src/portfolio2027/components/SelectedWork.jsx');
 window.scrollTo(0,0);const host=document.createElement('div');host.className='portfolio-2027';host.id='qa-unmount';host.style.cssText=`position:absolute;top:${innerHeight*.8}px;left:0;width:100%;z-index:50`;document.body.appendChild(host);history.replaceState(null,'',location.pathname);window.__qaRoot=createRoot(host);window.__qaRoot.render(React.createElement(SelectedWork));
});await page.waitForTimeout(200);assert.equal(await page.locator('#qa-unmount .p27-construction').count(),1);await page.evaluate(()=>{window.__qaRoot.unmount();document.querySelector('#qa-unmount').remove()});const stopped=await page.evaluate(()=>window.__p27Draws);await page.waitForTimeout(200);assert.equal(await page.evaluate(()=>window.__p27Draws),stopped);assert.equal(await page.locator('.p27-construction').count(),0);pass('Active React unmount removes overlay and stops drawing');
const fallback=await context.newPage();await fallback.emulateMedia({reducedMotion:'no-preference'});await fallback.addInitScript(()=>HTMLCanvasElement.prototype.getContext=()=>null);await fallback.goto(url);await fallback.evaluate(()=>document.fonts.ready);await fallback.waitForTimeout(150);await fallback.evaluate(()=>window.scrollTo(0,document.querySelector('#projects').offsetTop-innerHeight*.8));await fallback.waitForTimeout(100);assert.equal(await fallback.locator('#projects').getAttribute('data-construction'),'final');assert.equal(await fallback.locator('#projects a').count(),4);assert.equal(await fallback.locator('.p27-construction').count(),0);await fallback.close();pass('Canvas unavailable fails open with all project links');
const nojsContext=await browser.newContext({javaScriptEnabled:false});const nojs=await nojsContext.newPage();await nojs.goto(url);assert.equal(await nojs.locator('article').count(),2);assert.equal(await nojs.locator('article a').count(),4);pass('No JavaScript HTML fallback contains both projects and four links');
assert.deepEqual(report.errors,[]);fs.writeFileSync(`${out}/results.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await browser.close();await server.close();}
