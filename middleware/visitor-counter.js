const express = require('express')
const router = express.Router()
const mysql = require('../database')

const visitorCounter = router.use((req, res, next) => {
  // console.log('Visits at ' + new Date().toTimeString())
  // console.log(req)

  // const sql = 'INSERT INTO `logs` (id) VALUES(NULL)'

  // mysql.query(sql, (err, results, fields) => {
    // console.log(results)
    // console.log(fields)
  // })

  next()
})

module.exports = visitorCounter
