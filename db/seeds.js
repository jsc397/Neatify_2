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
  Solution.find({}).remove(() => {
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

User.find({}).remove(() => {
  Solution.find({}).remove(() => {
    let benedict = User.create({
      local: {
        email: "benedictcumberbatch@gmail.com",
        password: "bestsherlock"
      }
    }).then(user => {
      Promise.all([
        Solution.create({
          content: "this is benedict's first solution",
          author: user._id
        }).then(solution => {
          user.solutions.push(solution);
        }),
        Solution.create({
          content: "This would be benedict's second solution",
          author: user._id
        }).then(solution => {
          user.solutions.push(solution);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let thor = User.create({
      local: {
        email: "iamthor@gmail.com",
        password: "iamthor1"
      }
    }).then(user => {
      Promise.all([
        Solution.create({
          content: "this is thors's answer",
          author: user._id
        }).then(solution => {
          user.solutions.push(solution);
        }),
        Solution.create({
          content: "this is thor's second solution",
          author: user._id
        }).then(solution => {
          user.solutions.push(solution);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let deadpool = User.create({
      local: {
        email: "iamdeadpool@gmail.com",
        password: "iamdeadpool2"
      }
    }).then(user => {
      Promise.all([
        Solution.create({
          content: "this is deadpools solution1",
          author: user._id
        }).then(solution => {
          user.solutions.push(solution);
        }),
        Solution.create({
          content: "this is deadpools second solution to the problem",
          author: user._id
        }).then(solution => {
          user.solutions.push(solution);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});
