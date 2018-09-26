const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.js");
const userController = require("../controllers/user.js");
const problemController = require("../controllers/problems.js");

// Application routes
router.get("/", applicationController.index);

//User routes
router.get("/user", userController.new);
router.post("/user", userController.create);
router.get("/user/:id", userController.show);
router.delete("/user/:id", userController.delete);

// Problem routes
router.get("/problems", problemController.index);
router.get("/problems/:id", problemController.show);
router.put("/problems/:id", problemController.update);
// router.post("/problems/:id", problemController.create)

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
