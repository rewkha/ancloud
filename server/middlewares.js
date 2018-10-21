'use strict';

import express from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import config from './config/config.json';
import routes from './routes';

export default (app) => {

  app.use(express.static(config.staticDir.root));
  app.use(favicon(config.staticDir.root + '/favicon.ico'));
  app.use(bodyParser.json());

  app.use('/api', routes());

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
};
