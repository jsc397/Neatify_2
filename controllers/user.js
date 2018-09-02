const User = require("../models/User");
const { Solution, Comment } = require("../models/Solution");

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

  new: (req, res) => {
    res.render("user/new");
  },

  create: (req, res) => {
    User.create({
      local: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(user => {
      res.redirect(`/user/${user._id}`);
      // res.redirect(`/problem/index`)
      //potential: when the user signs ups, instead of going to a blank user ID have them go to the problems page?
      // Or...keep this as is...create a button that redirects them to the problems page
    });
  },

  delete: (req, res) => {
    //route works, problem is user view
    console.log(req);
    User.findOneAndRemove({ _id: req.params.id }).then(() => {
      res.redirect("/");
    });
  }
};
