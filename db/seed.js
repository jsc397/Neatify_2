const User = require("../models/User");
const { Solution } = require("../models/Solution")


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
            })
        })

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
                user.save(err => console.log(err))
            })
        })

        let deadpool = User.create({
            local: {
                email: "iamdeadpool@gmail.com",
                password:"iamdeadpool2"
            }
        }).then(user => {
            Promise.all([
                Solution.create({
                    content: "this is deadpools solution1",
                    author: user._id
                }).then(solution => {
                    user.solutions.push(solution)
                }),
                Solution.create({
                    content: "this is deadpools second solution to the problem",
                    author: user._id
                }).then(solution => {
                    user.solutions.push(solution)
                })
            ]).then(() => {
                user.save(err => console.log(err))
            })
        })
    })
})