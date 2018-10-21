require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"app":{"name":"AnCloud App"},"server":{"port":3000},"staticDir":{"root":"./static"},"session":{"secretKey":"sasa"},"storage":{"type":"s3","bucket":"ancloud-home-bucket"}}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(4);







const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_2__config_config_json___default.a.server.port;

app.set('port', port);

// Middlewares are imported here.
Object(__WEBPACK_IMPORTED_MODULE_3__middlewares__["a" /* default */])(app);

// Import and Set Nuxt.js options
let configNuxt = __webpack_require__(10);
configNuxt.dev = !("development" === 'production');

// Init Nuxt.js
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](configNuxt);

// Build only in dev mode
if (configNuxt.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serve_favicon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(7);








/* harmony default export */ __webpack_exports__["a"] = (app => {

  app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_3__config_config_json___default.a.staticDir.root));
  app.use(__WEBPACK_IMPORTED_MODULE_1_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_3__config_config_json___default.a.staticDir.root + '/favicon.ico'));
  app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());

  app.use('/api', Object(__WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */])());

  // Handle 200.
  // Or you can use express-mung to intercept the response body. Read this post for how to:
  // https://ciphertrick.com/2016/04/04/express-middleware-to-intercept-response-body/
  app.use((req, res, next) => {
    if (res.body !== undefined) {
      res.body = {
        status: 200,
        data: res.body
      };
      res.json(res.body);
    } else {
      next();
    }
  });

  // Handle error - 404, 500, etc.
  // http://expressjs.com/en/guide/error-handling.html
  app.use((err, req, res, next) => {
    res.body = {
      status: err.status,
      message: err.message
    };
    res.status(err.status || 500);
    res.json(res.body);
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_aws_storage__ = __webpack_require__(8);





const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

const storage = new __WEBPACK_IMPORTED_MODULE_1__components_aws_storage__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (() => {

  router.get('/folder', async (req, res, next) => {
    try {
      let result = await storage.getList(req.query.prefix, 'ancloud-home-bucket');
      res.body = result;
      next();
    } catch (e) {
      console.err(e);
      var err = new Error('Wrong data');
      err.status = 500;
      return next(err);
    }
  });

  router.use(function (req, res, next) {
    if (!req.route) {
      var err = new Error('Route Not Found');
      err.status = 404;
      return next(err);
    }
    next();
  });

  return router;
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk__);


class Storage {
  constructor() {
    this.s3 = new __WEBPACK_IMPORTED_MODULE_0_aws_sdk___default.a.S3({
      params: { Bucket: '' }
    });
  }

  /**
   * Get list of files and folders from folder prefix
   *
   * @example
   * storage.getList('', 'bucket-name');
   *
   * {
   *  "files": [
   *    {
   *      "Key": "example/",
   *      "LastModified": "2018-10-21T17:01:46.000Z",
   *      "ETag": "\"example12332example\"",
   *      "Size": 0,
   *      "StorageClass": "STANDARD"
   *    },
   *    ...
   *  ],
   *  "folders": [
   *    {
   *      "Prefix": "example/example2/"
   *    }
   *  ],
   *  "count": 2
   * }
   *
   * @param {String} folder
   * @param {String} bucket
   * @returns {Promise} Always returns exactly the same object
   */
  getList(folder, bucket) {
    return new Promise((resolve, reject) => {
      this.s3.listObjectsV2({
        Bucket: bucket,
        Prefix: folder,
        Delimiter: '/'
      }, function (err, data) {
        if (err) {
          reject(err, err.stack);
        } else {
          resolve({
            files: data.Contents,
            folders: data.CommonPrefixes,
            count: data.KeyCount
          });
        }
      });
    });
  }

  // getMyBuckets() {
  //   this.s3.listBuckets({}, function(err, data) {
  //     if (err) {
  //       console.log(err, err.stack); // an error occurred
  //     } else {
  //       console.log(data);
  //     }
  //   })
  // }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Storage;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ancloud',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map