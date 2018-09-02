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
      .sort({ createdAt: -1 })
      // .limit(10)
      .populate("solutions")
      // then find a user by it's id
      // then populate the userid
      .then(problems => {
        console.log(problems);
        res.render("problems/show", { problems });
      });
    //then match the object id in the solutions array to the object id in the solutions collection
    //then show the actual string (content) on client side
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
// Advanced for update: save the problem then find the user by id and also save the problem to user show page
