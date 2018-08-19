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
        //Find problem that matches the url's id
        //then show the paragraphs
        //then match the object id in the solutions array to the object id in the solutions collection
        //then show the actual string (content) on client side
        Problem.find({_id: req.params.id})
        .populate("solutions")
        .then()

        res.render('problems/show', { problems } )
    },
   update: (req, res) => {
    let { answer } = req.body
     // create a new solution based on content
        Solution.create({ 
            content: answer
        }).then(solution => {
        // find problem by it's ID
            Problem.findOne({
                _id: req.params.id
            }).then(problem => {
                // push solution to problem.solutions
                problem.solutions.push(solution)
                // save problem with new solution
                problem.save(err => {
                    // redirect back to problem show page..actual code to update.
                    res.redirect(`/problems/${problem._id}`)
                })
            })
        })
    }
}