const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/upload')

router.post('/', ctrl.addImage)

module.exports = router