const Problem = require("../models/Problem")

module.exports = {
    index: (req, res) => {
        // Problem.find({})
        // .then(problems => {
        //   res.render('problems/index', { problems });
        // }) 
        res.send('problems index')
    },
    show: (req, res) => {
        // Problem.findOne({ _id: req.params.id })
        // .populate("paragraph")
        // .exec(function(err, solution))

            // Problem.findOne({ _id: req.params.id })
            //     .populate("solutions")
            //     .then(solutions => {
            //         res.render('problem/show', solutions)
            //     })
        // },


        res.send('problems show view')
    }
}


  // .sort({ createdAt: -1})
        // .limit (3)
        // .populate("paragraph")
        // .then(problems => {
        //     res.render("problems/index")
        // })