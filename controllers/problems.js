const Problem = require("../models/Problem")
const Solution = require("../models/Solution").Solution

module.exports = {
    index: (req, res) => {
        Problem.find({})
        .sort({ createdAt: -1 })
        .limit(3)
        .populate("paragraphs")
        .then(problems => {
            res.render("problems/index", { problems })
        })
    },

    show: (req, res) => {
        // console.log('get problem: ', req.params.id)
        Problem.findOne({_id: req.params.id})
        .then(problems => {
            res.render('problems/show', problems)
        })
    },
   update: (req, res) => {
    let { content } = req.body
     // create a new solution based on content
        Solution.create({ 
            content: content
        }).then(solution => {
        // find problem by it's ID
            Problem.findOne({
                _id: req.params.id
            }).then(problem => {
                // push solution to problem.solutions
                problem.solutions.push(solution)
                // save problem with new solution
                problem.save(err => {
                    // redirect back to problem show page
                    res.redirect(`/user/${user._id}`)
                })
            })
        })
    }
}


    // update: (req, res) => {
    //     let { content } = req.body
    //     Problem.findOne({_id: req.params.id})
    //     .then(problem => {
    //         problem.solutions.push({
    //              content
    //             });
    //             problem.save(err => {
    //                 res.redirect('/')
    //              })
    //             })
    //         // console.log(req.body)
    //     }
    

        // create:  (req, res) => {
        //     console.log(req.body)
        //     Solution.create({
        //     content: req.body.solutions.content,
        //      author: req.user._id
        //      }).then(solution => {
        //         User.findOne({_id: req.body.author})
        //         .then(user => {
        //          user.solutions.push(solution);
        //         user.save(err => {
        //         res.redirect(`/user/${user._id}`)
        //             })
        //         })
        //      })
        // },


        // show
                // .populate("author")
                // .populate("comments.author")
                // .then(gif => {
                //     res.render('gif/show', gif) })

                // Problem.findOne({ _id: req.params.id })
                //     .populate("solutions")
                //     .then(solutions => {
                //         res.render('problem/show', solutions)
                //     })
                // },
                //  res.send('problems show view')