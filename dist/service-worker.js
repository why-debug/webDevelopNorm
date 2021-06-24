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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0c8e6fd610da17403ae5bd029ac80e97"
  },
  {
    "url": "assets/css/0.styles.00b5439d.css",
    "revision": "1df7461e5ce081763a5a8e6fe6316dc8"
  },
  {
    "url": "assets/img/front-end-develop-standard02.921eaab9.jpg",
    "revision": "921eaab95367ecbd4f47b4b29bbc8ed0"
  },
  {
    "url": "assets/img/front-end-develop-standard03.bdb3ac21.jpg",
    "revision": "bdb3ac21eeadb17f45d87f064e79d2e3"
  },
  {
    "url": "assets/img/front-end-develop-standard04.84049557.jpg",
    "revision": "84049557a52ccb6ddad7169956259aeb"
  },
  {
    "url": "assets/img/front-end-develop-standard05.1060cb72.jpg",
    "revision": "1060cb72f154c00250749f2b2c9c867a"
  },
  {
    "url": "assets/img/front-end-develop-standard06-1.ab41f781.jpg",
    "revision": "ab41f7817114d9638802e35ac5e1dc75"
  },
  {
    "url": "assets/img/front-end-develop-standard06.0c6b5ead.jpg",
    "revision": "0c6b5eadc6538593461704949dad6f0d"
  },
  {
    "url": "assets/img/front-end-develop-standard07.bf8edd87.jpg",
    "revision": "bf8edd87873c077e1d831a33d49449cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2957bb7.js",
    "revision": "7a7bc1b641587bc064e874df02b59e84"
  },
  {
    "url": "assets/js/11.08482f29.js",
    "revision": "f2328d8f73e1e54461d4c6e2077732b0"
  },
  {
    "url": "assets/js/2.d187085c.js",
    "revision": "b29470ef580202dd64eb870c85563cb3"
  },
  {
    "url": "assets/js/3.3dddeced.js",
    "revision": "75264f6844ce597bde2df09a55913a5f"
  },
  {
    "url": "assets/js/4.8ca7ae66.js",
    "revision": "32eafc2660ae6fbad002bdaa4697ccbf"
  },
  {
    "url": "assets/js/5.3bc630c7.js",
    "revision": "dcc3e328c52a85bdccb16bcc7873513e"
  },
  {
    "url": "assets/js/6.19031088.js",
    "revision": "40dcb6122b8a89249bdb3449f8c2cbb7"
  },
  {
    "url": "assets/js/7.fa1b6b0c.js",
    "revision": "10f6dca16729269843885780cf9706ca"
  },
  {
    "url": "assets/js/8.b9a4df06.js",
    "revision": "b9d78c33220574d1b6e1e661c9050425"
  },
  {
    "url": "assets/js/9.14d35e4e.js",
    "revision": "9032a274d2ebaf915a4c08f1cfe1d8a6"
  },
  {
    "url": "assets/js/app.8ddc21c1.js",
    "revision": "8cf01c8009eb7132339a57d63a083fec"
  },
  {
    "url": "code/css/index.html",
    "revision": "7547d2860b410e729da6d92bb5bc9ef3"
  },
  {
    "url": "code/es6/index.html",
    "revision": "9448312eabab3a289f341991a77cbf54"
  },
  {
    "url": "code/html/index.html",
    "revision": "d0fae15abfe62c7e947a277a56c83ec9"
  },
  {
    "url": "code/javascript/index.html",
    "revision": "a1a20b6a8984901de54bc916f4292710"
  },
  {
    "url": "code/react/index.html",
    "revision": "4eb7393cd5c69fad8f8381007f66099e"
  },
  {
    "url": "egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "index.html",
    "revision": "f6c6a30de0750d279cae95151ae2922d"
  },
  {
    "url": "name/index.html",
    "revision": "a9febf48e3c258981b687ab4943e3df5"
  },
  {
    "url": "trycheers-icon.png",
    "revision": "376e2cef9e8c1a27eea41d4914987be8"
  },
  {
    "url": "use/index.html",
    "revision": "27e9ac3563fe897bc0f55235424f522e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
