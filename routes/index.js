const express = require('express')
const router = express.Router()

router.use('/', require('./application'))

module.exports = router