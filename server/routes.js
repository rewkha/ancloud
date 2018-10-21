'use strict';

import { Router } from 'express';
import Storage from './components/aws-storage';

const router = Router();

const storage = new Storage();

export default () => {

  router.get('/folder', async(req, res, next) => {
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

  router.use(function(req, res, next) {
    if (!req.route) {
      var err = new Error('Route Not Found');
      err.status = 404;
      return next(err);
    }
    next();
  });

  return router;
};
