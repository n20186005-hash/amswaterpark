// Retire the old offline page shell so status and consent never revive stale pages.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('awp-')).map(k=>caches.delete(k)))).then(()=>self.registration.unregister())));
