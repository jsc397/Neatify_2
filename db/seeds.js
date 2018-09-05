const User = require("../models/User");
const { Solution } = require("../models/Solution");
const Problem = require("../models/Problem");

// Problem.find({}).remove(() => {
//   Solution.find({}).remove(() => {
//     let problemOne = Problem.create({
//       paragraph: "This is problem number1."
//     }).then(problem => {
//       Promise.all([
//         Solution.create({
//           content: "this is problem1 attempted solution",
//           author: user._id
//         }).then(solution => {
//           problem.solutions.push(solution);
//         }),
//         Solution.create({
//           content: "This is another solution to problem1",
//           author: user._id
//         }).then(solution => {
//           problem.solutions.push(solution);
//         })
//       ]).then(() => {
//         problem.save(err => console.log(err));
//       });
//     });
//   });
// });
Problem.find({}).remove(() => {
  Soltuion.find({}).remove(() => {
    let problemOne = Problem.create({
      paragraph: "This is problem 1"
    }).then(problem => {
      Promise.all([
        Solution.create({
          content: "This is problem 1 attempted solution",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        }),
        Solution.create({
          content: "This is problem 1 attempted solution 2",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        })
      ]).then(() => {
        problem.save(err => console.log(err));
      });
    });

    let problemTwo = Problem.create({
      paragraph: "This is problem 2"
    }).then(problem => {
      Promise.all([
        Solution.create({
          content: "This is problem 2 attempted solution 1",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        }),
        Solution.create({
          content: "This is problem 2 attempted solution 2",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        })
      ]).then(() => {
        problem.save(err => console.log(err));
      });
    });

    let ProblemThree = Problem.create({
      paragraph: "This is problem 3"
    }).then(problem => {
      Promise.all([
        Solution.create({
          content: "This is problem 3 attempted solution 1",
          author: user._id
        }).then(solution => {
          problem.solutions.push(solution);
        }),

        Solution.create({
          content: "This is problem 3 attempted solution 1",
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
