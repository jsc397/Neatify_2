const User = require("../models/User");
const { Solution } = require("../models/Solution");
const Problem = require("../models/Problem");

Problem.find({}).remove(() => {
  Solution.find({}).remove(() => {
    let problemOne = Problem.create({
      paragraph:
        "Operationally, teaching effectiveness is measured by assessing the levels of agreement between the perceptions of instructors and students on the rated ability of specific instructional behavior attributes which were employed during course instruction. Due to the fact that instructors come from diverse backgrounds and occupy different positions within a given university, both individual and organizational based factors may contribute to the variance in levels of agreement between perceptions."
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
      paragraph:
        "The plot is less than the sum of its parts. It concerns an unconventional family -- a free-spirited mother and her three young-adult children -- that visits an English seaside resort. There they meet a young dentist, who falls in love with the older daughter, his grumpy landlord, the mother's nervous solicitor, the friendly waiter, and a stuffy barrister."
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
      paragraph:
        "One must look at the play for the answer. The scene is an old rural town several kilometers from London in 1707 in which this play takes place. The major character begins her powerful roaring. For she has come upon the stage. She is a swan of beauty and grace which sails through the portals of the mind into greater sunsets. She is an eagle that soars through the sky to another atmosphere. In short, she carries the play with her wonderful, classical, energetic, smooth performance. Miss Eccles' mouth is a grand canyon of excellent speech. The voice is full of fire, pain, pleasure and love; yet natural. Her voice is full of raw emotion which is born within a person. It is not taught. Moreover, her voice is a shark which swims from its mother's belly into the blue ocean. It is the bird which is tossed from the nest, and it flies. The play flew because of the skills of Julie Eccles, and the fact that she is glorious does not hurt!"
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
