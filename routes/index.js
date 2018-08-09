const express = require('express')
const router = express.Router()

router.use('/', require('./application'))
// router.use('/problems', require('./problems'))
router.use('/user', require('./user'))

router.all('*',(req,res)=> {
    res.status(400).send()
})

module.exports = router