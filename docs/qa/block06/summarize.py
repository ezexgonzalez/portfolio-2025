import json, hashlib
from pathlib import Path
p = Path('docs/qa/block06')
r = json.loads((p/'results.json').read_text())
def cls(shifts):
    top = value = 0; start = last = None
    for x in shifts:
        if x['recent']: continue
        if start is None or x['t']-last >= 1000 or x['t']-start >= 5000:
            start = x['t']; value = 0
        value += x['value']; top = max(top,value); last = x['t']
    return top
out = {'fontCases':[], 'motion':[], 'layouts':r['layouts'], 'axe':[]}
for f in r['fonts']:
    out['fontCases'].append({'mode':f['mode'],'LCPms':f['qa']['lcp'][-1]['t'] if f['qa']['lcp'] else None,'CLSsession':cls(f['qa']['shifts']),'shiftSumNotCLS':sum(x['value'] for x in f['qa']['shifts'] if not x['recent']),'failed':f['failed'],'loaded':[{k:x[k] for k in ['family','weight','style','display']} for x in f['fonts'] if x['status']=='loaded']})
for m in r.get('motion',[]):
    a={x['name']:x['value'] for x in m['performanceBefore']}; b={x['name']:x['value'] for x in m['performanceAfter']}
    ev=[x['duration'] for x in m['metrics']['qa']['events'] if x['interactionId']]
    out['motion'].append({'width':m['width'],'FPS':m['fps'],'heroTaskSeconds4s':b['TaskDuration']-a['TaskDuration'],'heapBytesBefore':a['JSHeapUsedSize'],'heapBytesAfter':b['JSHeapUsedSize'],'maxObservedInteractionMs':max(ev,default=None),'eventSamples':len(ev),'longTasks':m['metrics']['qa']['long'],'phaseOrder':list(dict.fromkeys(x['state'] for x in m['construction']['phases'])),'offscreenDraws':m['offscreenDraws']})
for a in r['accessibility']:
    out['axe'].append({'width':a['width'],'violations':len(a['violations']),'incomplete':[{k:x[k] for k in ['id','impact']} for x in a['incomplete']]})
for mode in ['desktop','mobile']:
    h=json.loads((p/f'lighthouse-{mode}.json').read_text())
    out['lighthouse-'+mode]={'version':h['lighthouseVersion'],'scores':{k:v['score'] for k,v in h['categories'].items()},'fonts':[x for x in h['audits']['network-requests']['details']['items'] if x.get('resourceType')=='Font']}
(p/'metrics.json').write_text(json.dumps(out,indent=2))
print(json.dumps({k:v for k,v in out.items() if k not in ['layouts']},indent=2))
