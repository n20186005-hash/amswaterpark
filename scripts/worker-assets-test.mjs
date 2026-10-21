import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.resolve('wrangler'));
const {Miniflare,convertV4MiniflareOptions}=require('miniflare');
// Installed local workerd predates production compatibility2026-08-20.
const mf=new Miniflare(convertV4MiniflareOptions({name:'amswaterpark-test',modules:true,script:fs.readFileSync('worker.js','utf8'),compatibilityDate:'2026-08-11',assets:{directory:'dist',binding:'ASSETS',run_worker_first:true,routerConfig:{has_user_worker:true,invoke_user_worker_ahead_of_assets:true},assetConfig:{not_found_handling:'404-page'}}}));
try{
 for(const path of ['/404','/404/','/404.html','/404.html/','/missing-error-probe','/en/missing-error-probe'])for(const query of ['','?q=a%2Fb&q=2'])for(const method of ['GET','HEAD']){
  const r=await mf.dispatchFetch(`https://amswaterpark.com${path}${query}`,{method,redirect:'manual'});assert.equal(r.status,404,method+path+query);assert.equal(r.headers.get('X-Robots-Tag'),'noindex, follow');assert.equal(r.headers.get('Location'),null);const body=await r.text();assert.equal(method==='HEAD'?body==='':/noindex,\s*follow/.test(body),true);
 }
 for(const path of ['/','/en/','/privacy/','/en/privacy/','/cookies/','/en/cookies/','/terms/','/en/terms/','/consent.js']){const r=await mf.dispatchFetch(`https://amswaterpark.com${path}`,{redirect:'manual'});assert.equal(r.status,200,path);assert.equal(r.headers.get('X-Robots-Tag'),null);}
 for(const host of ['http://amswaterpark.com','http://www.amswaterpark.com','https://www.amswaterpark.com']){const r=await mf.dispatchFetch(`${host}/404.html?q=a%2Fb&q=2`,{redirect:'manual'});assert.equal(r.status,301);assert.equal(r.headers.get('Location'),'https://amswaterpark.com/404.html?q=a%2Fb&q=2');}
 const slash=await mf.dispatchFetch('https://amswaterpark.com/en/cookies?q=a%2Fb&q=2',{redirect:'manual'});assert.equal(slash.status,301);assert.equal(slash.headers.get('Location'),'https://amswaterpark.com/en/cookies/?q=a%2Fb&q=2');
 const post=await mf.dispatchFetch('https://amswaterpark.com/api/weather',{method:'POST'});assert.equal(post.status,405);
 console.log('PASS actual local Worker+Assets:48 GET/HEAD/query error alias/unknown404 cases;9normal pages/assets200;canonical host/protocol priority and slash301 preserve path/query;weather POST405. Local compat2026-08-11 only; production unchanged.');
}finally{await mf.dispose();}
