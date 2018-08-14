const express = require('express')
const router = express.Router()
const problemController = require("../controllers/problems.js")
// const solutionController = require("../controllers/solution.js")

router.get("/", problemController.index)
router.get("/:id", problemController.show)
module.exports = router