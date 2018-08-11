const express = require('express')
const router = express.Router()
const applicationController = require("../controllers/application.js")


router.use('/user', require('./user'))
// router.use('/solutions', require('./solution'))
router.use('/problems', require('./problems'))
router.use('/', require("./application.js"))
router.use('/', applicationController.index)

router.all('*',(req,res)=> {
    res.status(400).send()
})

module.exports = router