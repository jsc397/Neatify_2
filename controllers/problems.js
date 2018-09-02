const Problem = require("../models/Problem");
const Solution = require("../models/Solution").Solution;

module.exports = {
  index: (req, res) => {
    Problem.find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .populate("paragraphs")
      .then(problems => {
        res.render("problems/index", { problems });
      });
  },

  show: (req, res) => {
    console.log("get problem: ", req.params.id);
    //Find problem that matches the url's id
    Problem.findOne({ _id: req.params.id })
      //then show the paragraphs
      // .populate("paragraphs")
      .populate("solutions")
      .then(problems => {
        console.log(problems);
        res.render("problems/show", { problems });
      });
    //then match the object id in the solutions array to the object id in the solutions collection
    //then show the actual string (content) on client side

    //   .populate("solutions.content")
    //   .then(problems => {
    //     res.render("problems/show", { problems });
    //   });

    // show: (req, res) => {
    //   Tweet.findOne({ _id: req.params.id })
    //     .populate("author")
    //     .exec(function (err, tweet) {
    //       Comment.populate(tweet.comments, { path: "author" }, function (
    //         err,
    //         comments
    //       ) {
    //         tweet.comments = comments;
    //         console.log(tweet);
    //         res.render("tweet/show", tweet);
    //       });
    //     });
    // },
  },
  update: (req, res) => {
    let answer = req.body.content;
    // create a new solution based on content
    Solution.create({
      content: answer
    }).then(solution => {
      // find problem by it's ID
      Problem.findOne({
        _id: req.params.id
      }).then(problem => {
        // push solution to problem.solutions
        problem.solutions.push(solution);
        // save problem with new solution
        problem.save(err => {
          // redirect back to problem show page..actual code to update.
          res.redirect(`/problems/${problem._id}`);
        });
      });
    });
  }
};
// New problem: when I enter a solution to the database, the solution posts, but the content is not captured, with no error message. Content is empty...with no error message. Why..what is going on.
