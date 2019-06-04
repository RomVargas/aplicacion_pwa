// asignar nombre y version de cache
const CACHE_NAME = 'v1_cache_app_pwa';

//Ficeheros a cachar en la app - se deben cachear todos los archivos e iconos en la app
var urlsToCache = [
    './',
    './css/styles.css',
    './img/avatarRom.png',
    './img/dataMinning.png',
    './img/facebook.png',
    './img/hack.png',
    './img/instagram.png',
    './img/twitter.png',
];

// evento install
// evento que se encarga de instalar y guardar en cache los servicios estaticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
                .then(() => {
                    self.skipWaiting();
                });
        })
        .catch(err => console.log('No se ha registrado el cache', err))
    );
});

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    //Eliminamos lo que ya no se necesita en cache
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            );
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    );
});

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                //recuperar del cache
                return res
            }
            //recuperar de la petición a la url
            return fetch(e.request)
        })
    );
});