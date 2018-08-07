const express = require('express')
const router = express.Router()
const problemController = require("../controllers/problems.js")

router.get("/", problemController.index)

// router.post("/:id", problemController.show)

module.exports = router