import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const code=fs.readFileSync('public/consent.js','utf8'),KEY='awp-cookie-preferences',DENY='awp-analytics-denied',GA='ga-disable-G-HXM22WWPKP';
function store(map=new Map()) { return {map,fail:{},writes:[],getItem(k){if(this.fail.read)throw Error('read');return map.get(k)??null;},setItem(k,v){if(this.fail.write)throw Error('write');this.writes.push([k,v]);map.set(k,v);},removeItem(k){if(this.fail.clear)throw Error('clear');map.delete(k);}}; }
function page({lang='en',local=store(),session=store(),name='',nameFail={}}={}){
 const scripts=[],events={},handlers={},status={textContent:''};
 const context={localStorage:local,sessionStorage:session,document:{documentElement:{lang},getElementById:id=>id==='cookie-status'?status:['accept-analytics','decline-analytics'].includes(id)?{addEventListener:(_type,fn)=>handlers[id]=fn}:scripts.find(s=>s.id===id),createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}},addEventListener(type,fn){events[type]=fn;}};
 Object.defineProperty(context,'name',{get(){if(nameFail.read)throw Error('readname');return name;},set(v){if(nameFail.write)throw Error('writename');name=v;}});
 context.window=context;vm.createContext(context);vm.runInContext(code,context);
 return {context,scripts,status,local,session,nameFail,allow(){handlers['accept-analytics']();},deny(){handlers['decline-analytics']();},reload(){return page({lang,local,session,name,nameFail});},event(value){events.storage({key:KEY,newValue:value});},allowed:()=>context[GA]===false,runtime:()=>Array.from(context.dataLayer||[]).filter(x=>x[0]==='consent').at(-1)?.[2].analytics_storage};
}
for(const lang of ['id','en']){
 let p=page({lang});assert.equal(p.allowed(),false);assert.equal(p.scripts.length,0);p.allow();assert.equal(p.runtime(),'granted');p.deny();assert.equal(p.runtime(),'denied');p.allow();assert.equal(p.runtime(),'granted');assert.equal(p.scripts.length,1);assert.match(p.status.textContent,/diizinkan|allowed/);
 p.local.fail.write=true;p.deny();assert.equal(p.allowed(),false);assert.equal(p.runtime(),'denied');assert.equal(JSON.parse(p.local.getItem(KEY)).analytics,true);assert.equal(p.session.getItem(DENY),'1');assert.match(p.status.textContent,/tab ini|this tab/);const next=p.reload();assert.equal(next.scripts.length,0);assert.equal(next.allowed(),false);
 for(const which of ['local','session']){const local=store(new Map([[KEY,'{"analytics":true}']])),session=store();(which==='local'?local:session).fail.read=true;p=page({lang,local,session});assert.equal(p.scripts.length,0);p.allow();assert.equal(p.allowed(),false);assert.equal(p.scripts.length,0);}
 p=page({lang});p.allow();p.local.fail.write=true;p.session.fail.write=true;p.nameFail.write=true;p.deny();assert.equal(p.runtime(),'denied');assert.match(p.status.textContent,/halaman ini|this page/);
 p=page({lang});p.allow();p.session.fail.write=true;p.local.fail.write=true;p.deny();assert.match(p.context.name,/awp-analytics-denied/);p.local.fail.write=false;assert.equal(p.reload().scripts.length,0);
 const shared=store(new Map([[KEY,'{"analytics":false}']])),a=page({lang,local:shared}),b=page({lang,local:shared});a.deny();a.session.fail.clear=true;const writes=shared.writes.length;a.allow();assert.equal(shared.writes.length,writes);assert.equal(JSON.parse(shared.getItem(KEY)).analytics,false);b.event(shared.getItem(KEY));assert.equal(b.allowed(),false);
 a.session.fail.clear=false;shared.fail.clear=true;a.allow();assert.equal(JSON.parse(shared.getItem(KEY)).analytics,false);shared.fail.clear=false;a.nameFail.write=true;a.allow();assert.equal(JSON.parse(shared.getItem(KEY)).analytics,false);a.nameFail.write=false;a.allow();b.allow();assert.equal(b.allowed(),true);a.deny();b.event(shared.getItem(KEY));assert.equal(b.runtime(),'denied');assert.match(b.status.textContent,/nonaktif|off/);
 for(const raw of ['broken','null','{"analytics":"true"}']){p=page({lang,local:store(new Map([[KEY,raw]]))});assert.equal(p.scripts.length,0);}
 p=page({lang});p.allow();p.session.fail.read=true;p.event('{"analytics":true}');assert.equal(p.allowed(),false);assert.equal(p.runtime(),'denied');
 console.log(`${lang}: PASS actual consent code/events, default-off, allow-deny-regrant, loaded-runtime withdrawal+failed old-grant write, full fresh-document reload veto, independent read failures, dual persistence failure scope, window-name fallback, failed clear before shared write, separate-tab cross-storage denial, malformed values.`);
}
