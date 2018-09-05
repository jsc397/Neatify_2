const User = require("../models/User");
const { Solution } = require("../models/Solution");
const Problem = require("../models/Problem");

Problem.find({}).remove(() => {
  Solution.find({}).remove(() => {
    let problemOne = Problem.create({
      paragraph: "This is problem number1."
    }).then(problem => {
      Promise.all([
        Solution.create({
          content: "this is problem1 attempted solution",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        }),
        Solution.create({
          content: "This is another solution to problem1",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        })
      ]).then(() => {
        problem.save(err => console.log(err));
      });
    });
  });
});
