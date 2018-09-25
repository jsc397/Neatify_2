const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.js");
const userController = require("../controllers/user.js");
const problemController = require("../controllers/problems.js");
// const solutionController = require("../controllers/solution")

// Application routes
router.get("/", applicationController.index);

//User routes
// router.get("/user", userController.new);
// router.post("/user", userController.create);
// router.get("/user/:id", userController.show);
// router.delete("/user/:id", userController.delete);
// User login&signup
router.get("/login", userController.login);
router.post("/login", userController.createLogin);
router.get("/user", userController.signUp);
router.post("/user", userController.createSignUp);
router.get("/logout", userController.logout);
router.get("/user/:id", userController.show);

// Problem routes
router.get("/problems", problemController.index);
router.get("/problems/:id", problemController.show);
router.put("/problems/:id", problemController.update);
// router.post("/problems/:id", problemController.create)

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
