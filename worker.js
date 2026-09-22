// Serves the static build (dist/) and adds a server-side weather endpoint.
// Weather is fetched from a public forecast source and cached at the edge so
// visitors always see a stable, recent reading without extra calls.

const LAT = -6.1582786;
const LON = 106.5835666;
const WEATHER_API = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset` +
  `&timezone=Asia%2FJakarta&forecast_days=7`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/weather") {
      return handleWeather(ctx);
    }
    return env.ASSETS.fetch(request);
  }
};

async function handleWeather(ctx) {
  const cache = caches.default;
  const cacheKey = new Request(WEATHER_API, { method: "GET" });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const upstream = await fetch(WEATHER_API, { cf: { cacheTtl: 600 } });
  const body = await upstream.text();
  const response = new Response(body, {
    status: upstream.status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=600, s-maxage=600",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, HEAD, OPTIONS"
    }
  });
  if (ctx && ctx.waitUntil) ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}
