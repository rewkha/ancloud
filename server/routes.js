'use strict'

import { Router } from 'express'

const router = Router()

export default () => {

  // Home page.
  router.get('/', (req, res, next) => {
    var output = {
      message: 'Hello World!'
    }
    res.body = output
    next()
  })


  // Handle routes not found.
  // https://stackoverflow.com/questions/38681318/express-4-middleware-when-route-is-not-found-finalhandler-not-called-how-to-c
  router.use(function(req, res, next) {
    if (!req.route) {
      var err = new Error('Route Not Found')
      err.status = 404
      return next(err)
    }
    next()
  })

  return router
}

// export default router