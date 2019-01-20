/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7fb5083ed1d662354bed.js"
  },
  {
    "url": "app-ca1ee02e5bde83b2537f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-678824396980a5f5de0a.js"
  },
  {
    "url": "index.html",
    "revision": "dc414eb57b9fa94fa395e18465123a13"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2104f3111ec56f2090f3e3b57e18279c"
  },
  {
    "url": "component---src-templates-blog-index-js-589dfe2dac66f25b1ef1.js"
  },
  {
    "url": "1-e9d00ec79e81a4f03fc8.js"
  },
  {
    "url": "3-64ab9d5bb8a0047ffbc0.js"
  },
  {
    "url": "0-9bf3512c16a5f67c8fc4.js"
  },
  {
    "url": "static/d/443/path---index-6a9-5FPYraO4QhmlFxlQdmoGByUDrYY.json",
    "revision": "38ae3b949d5a1cf6500f0d48242bbd6b"
  },
  {
    "url": "component---src-pages-404-js-c5d918603964c84ed96c.js"
  },
  {
    "url": "2-7ed7fbe8da3ff2e875e2.js"
  },
  {
    "url": "static/d/570/path---404-html-516-62a-ECE1XP9q8JeckxyAT8VCuFosU.json",
    "revision": "7aca3cccfbddac372ecff0ea3db5cb88"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7c3ae84bf002c1e4612785a6cc95ce0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
