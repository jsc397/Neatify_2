const express = require('express')
const router = express.Router()
const applicationController = require("../controllers/application.js")
const userController = require('../controllers/user.js')
const problemController = require("../controllers/problems.js")
const solutionController = require("../controllers/solution")


// Application routes
router.get("/", applicationController.index)

//User routes
router.get("/user", userController.new)
router.post("/user", userController.create)
router.get("/user/:id", userController.show)
router.delete("/user/:id", userController.delete)

// Problem routes
router.get("/problems", problemController.index)
router.get("/problems/:id", problemController.show)
router.post("/problems/:id", problemController.create)


// Solution routes
// router.get("/solutions", solutionController.new)
// router.post("/solutions", solutionController.create)



//commented out for testing

// router.use('/user', require('./user'))
// router.use('/problems/:id', require('./solution'))
// router.use('/problems', require('./problems'))
// router.use('/', require("./application.js"))
// router.use('/', applicationController.index)

router.all('*',(req,res)=> {
    res.status(400).send()
})

module.exports = router