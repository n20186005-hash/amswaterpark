const LAT=-6.1582786,LON=106.5835666;
const WEATHER_API=`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=Asia%2FJakarta&forecast_days=7`;
const routes=new Set(['/','/en/','/privacy/','/terms/','/cookies/','/en/privacy/','/en/terms/','/en/cookies/']);
export default {async fetch(request,env,ctx){
 const url=new URL(request.url);
 if(['amswaterpark.com','www.amswaterpark.com'].includes(url.hostname)&&(url.protocol!=='https:'||url.hostname!=='amswaterpark.com')){url.protocol='https:';url.hostname='amswaterpark.com';return Response.redirect(url.toString(),301);}
 if(url.pathname!=='/'&&routes.has(url.pathname+'/')){url.pathname+='/';return Response.redirect(url.toString(),301);}
 if(url.pathname==='/api/weather'){
  if(!['GET','HEAD'].includes(request.method))return new Response(null,{status:405,headers:{Allow:'GET, HEAD'}});
  const response=await weather(ctx);return request.method==='HEAD'?new Response(null,{status:response.status,headers:response.headers}):response;
 }
 const response=await env.ASSETS.fetch(request);
 if(response.status===404){const headers=new Headers(response.headers);headers.set('X-Robots-Tag','noindex, follow');return new Response(response.body,{status:404,headers});}return response;
}};
function safeData(value){
 const keys=['temperature_2m','relative_humidity_2m','apparent_temperature','precipitation','weather_code','wind_speed_10m'];
 const dayKeys=['weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max'];
 if(!value?.current||!value?.daily||!keys.every(k=>Number.isFinite(value.current[k])))throw Error('invalid');
 const time=value.daily.time;if(!Array.isArray(time)||!time.length||time.length>7||!time.every(v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)))throw Error('invalid');
 if(!dayKeys.every(k=>Array.isArray(value.daily[k])&&value.daily[k].length===time.length&&value.daily[k].every(Number.isFinite)))throw Error('invalid');
 return {current:Object.fromEntries(keys.map(k=>[k,value.current[k]])),daily:{time,...Object.fromEntries(dayKeys.map(k=>[k,value.daily[k]]))}};
}
async function weather(ctx){
 try{
  const cache=globalThis.caches?.default,key=new Request(WEATHER_API);const cached=await cache?.match(key);if(cached)return cached;
  const upstream=await fetch(WEATHER_API,{signal:AbortSignal.timeout(6000),redirect:'error',cf:{cacheTtl:600}});if(!upstream.ok)throw Error('upstream');
  const text=await upstream.text();if(text.length>100000)throw Error('oversize');
  const body=safeData(JSON.parse(text));const response=Response.json(body,{headers:{'Cache-Control':'public, max-age=600, s-maxage=600'}});
  if(cache&&ctx?.waitUntil)ctx.waitUntil(cache.put(key,response.clone()).catch(()=>{}));return response;
 }catch{return Response.json({error:'Weather unavailable'},{status:503,headers:{'Cache-Control':'no-store'}});}
}
