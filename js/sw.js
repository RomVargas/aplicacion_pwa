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
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache)
                .then(() => {
                    self.skipWaiting();
                })
                .catch(err => {
                    console.log('No se pudo cargar la aplicacion');
                })
        })
    );
})

// evento activate

//evento fetch