const express = require('express')
const router = express.Router()

const visitorCounter = require('../middleware/visitor-counter')
const auth = require('../middleware/auth')

const ArticleAllController = require('../controllers/articles/all')
const ArticleGetController = require('../controllers/articles/get')

router.get('/', auth, ArticleAllController)
router.get('/:id', auth, ArticleGetController)

module.exports = router
