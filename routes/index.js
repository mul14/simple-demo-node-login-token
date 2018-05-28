const express = require('express')
const router = express.Router()

const auth = require('./auth')
const articles = require('./articles')

router.use('/auth', auth)
router.use('/articles', articles)

module.exports = router
