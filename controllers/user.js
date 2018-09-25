const User = require("../models/User");
const { Solution, Comment } = require("../models/Solution");
const passport = require("passport");

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "solutions",
        options: { limit: 5 }
      })
      .then(user => {
        res.render("user/show", { user });
      });
  },

  login: (req, res) => {
    res.render("user/login", { message: req.flash("signupMessage") });
  },
  createLogin: (req, res) => {
    const login = passport.authenticate("local-login", {
      successRedirect: "/user/:id",
      failureRedirect: "/user",
      failureFlash: true
    });

    return login(req, res);
  },
  signUp: (req, res) => {
    res.render("user/signup", { message: req.flash("signupMessage") });
  },
  createSignUp: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/user",
      failureRedirect: "/",
      failureFlash: true
    });

    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },

  delete: (req, res) => {
    //route works, problem is user view
    // console.log(req);
    User.findOneAndRemove({ _id: req.params.id }).then(() => {
      res.redirect("/");
    });
  }
};
