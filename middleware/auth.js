const express = require('express')
const router = express.Router()
const mysql = require('../database')

module.exports = router.use((req, res, next) => {

  res.locals.status = 200

  if (!req.headers.authorization) {
    res.locals.message = 'Please provide token'
    res.locals.status = 401
    next()
  }

  const token = req.headers.authorization.replace('Bearer ', '')

  const sql = 'SELECT username FROM users WHERE token = ?'

  mysql.execute(sql, [token], (err, result) => {

    if (result.length) {
      next()
    } else {
      res.locals.message = 'Please provide token'
      res.locals.status = 401

      if (res.locals.status !== 200) {
        res.json({
          'message': 'Unauthorized'
        })
        res.end()
      }
    }

  })

})
