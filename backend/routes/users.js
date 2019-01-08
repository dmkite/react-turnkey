const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/users')

router.post('/signup', ctrl.signup)

module.exports = router

