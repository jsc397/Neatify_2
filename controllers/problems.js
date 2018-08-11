const Problem = require("../models/Problem")

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
        console.log('get problem: ', req.params.id)
        Problem.findOne({_id: req.params.id})
        .then(problem => {
            res.render('problems/show', problem)
        })
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
        }
    }

       


  // .sort({ createdAt: -1})
        // .limit (3)
        // .populate("paragraph")
        // .then(problems => {
        //     res.render("problems/index")
        // })