const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/auth/login');
const RegisterController = require('../controllers/auth/register');

router.post('/register', RegisterController)
router.post('/login', LoginController)

module.exports = router
