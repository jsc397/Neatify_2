const express = require("express")
const router = express.Router()
const solutionController = require("../controllers/solution")

//do I need to show the individual solution? so from my problems index page, which lists all of my problems, I want to be able to click the problem, which will go to its individual page, populate the problem and user can create his/her own solution to the specific problem from the problem/:id page.
router.get("/problem/:id", solutionController.new)
router.post("/problem/:id", solutionController.create)
// router.get("/:id",solutionController.show)
// router.get("/:id",solutionController.update)


module.exports = router;