import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import worker from '../worker.js';
import './consent-test.mjs';
const errorHTML=readFileSync('dist/404.html','utf8');
const env={ASSETS:{fetch:async request=>new Response(request.method==='HEAD'?null:errorHTML,{status:new URL(request.url).pathname==='/404'?200:404})}};
for(const path of ['/404','/404/','/404.html','/404.html/','/missing'])for(const method of ['GET','HEAD']){const r=await worker.fetch(new Request('https://amswaterpark.com'+path+'?q=a%2Fb&q=2',{method}),env);assert.equal(r.status,404);assert.match(r.headers.get('X-Robots-Tag'),/noindex/);assert.equal(r.headers.get('Location'),null);assert.equal(method==='HEAD'?await r.text()==='':(await r.text()).includes('noindex'),true);}
for(const u of ['http://amswaterpark.com/404.html?q=1','https://www.amswaterpark.com/404.html?q=1']){const r=await worker.fetch(new Request(u),env);assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://amswaterpark.com/404.html?q=1');}
let r=await worker.fetch(new Request('https://amswaterpark.com/cookies?q=1'),env);assert.equal(r.headers.get('location'),'https://amswaterpark.com/cookies/?q=1');
console.log('PASS Worker aliases GET/HEAD/query, unknown404/noindex, canonical priority and slash301.');
let upstreamCalls=0,cacheWrites=0;
globalThis.caches={default:{match:async()=>undefined,put:async()=>{cacheWrites++}}};
globalThis.fetch=async()=>{upstreamCalls++;return new Response('unavailable',{status:503})};
r=await worker.fetch(new Request('https://amswaterpark.com/api/weather'),env,{});assert.equal(r.status,503);assert.equal(upstreamCalls,1);assert.equal(cacheWrites,0);
r=await worker.fetch(new Request('https://amswaterpark.com/api/weather',{method:'POST'}),env,{});assert.equal(r.status,405);assert.equal(upstreamCalls,1);
const forecast={current:{temperature_2m:29,relative_humidity_2m:70,apparent_temperature:31,precipitation:0,weather_code:2,wind_speed_10m:4},daily:{time:['2026-10-19'],weather_code:[2],temperature_2m_max:[30],temperature_2m_min:[24],precipitation_probability_max:[20]},unexpected:'must not be forwarded'};
globalThis.fetch=async()=>{upstreamCalls++;return Response.json(forecast)};
r=await worker.fetch(new Request('https://amswaterpark.com/api/weather'),env,{});assert.equal(r.status,200);const data=await r.json();assert.equal(data.current.temperature_2m,29);assert.equal(data.unexpected,undefined);
forecast.daily.precipitation_probability_max=['<script>'];r=await worker.fetch(new Request('https://amswaterpark.com/api/weather'),env,{});assert.equal(r.status,503);
console.log('PASS weather read-only endpoint: upstream error/no retry/no error cache, method restriction, numeric whitelist and malformed response rejection.');
