// Import CDN for Google WORKBOX Library for PWA Model
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(

    // Routing module to register a route that matches all images

    // This will store only images in cache since they don't change often
    ({ request }) => request.destination === 'image',

    // Caching strategy -> Will check for network. If not found goes to cache
    new workbox.strategies.NetworkFirst()
)

// I have used PWA Asset generator to create icons for PWA app and manifest.json contains the details
// Link: https://github.com/onderceylan/pwa-asset-generator