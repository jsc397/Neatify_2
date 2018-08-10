const express = require('express')
const router = express.Router()
const problemController = require("../controllers/problems.js")

router.get("/", problemController.index)
router.get("/:id", problemController.show)
// router.post("")

module.exports = router