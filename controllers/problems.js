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
    console.log(req)
    // create a new solution based on content
       Solution.create({
           content: content,
           author: req.user._id
       }).then(solution => {
    // find problem by it's ID
        Problem.findOne({
            _id: req.body.id
        })
       })
    // push solution to problem.solutions
                
    // save problem with new solution
              
    // find User by USERID

    //push the saved solution to the User solution array
   
                
            
        
    
}


// {
//     let { content } = req.body
//     // create a new solution based on content
//     Solution.create({
//         content: content
//     }).then(solution => {
//         // find problem by it's ID
//         Problem.findOne({
//             _id: req.params.id
//         }).then(problem => {
//             // push solution to problem.solutions
//             problem.solutions.push(solution)
//             // save problem with new solution
//             problem.save(err => {
//                 // redirect back to problem show page..actual code to update.
//                 // send this to solution to user show page and save it to
//                 res.redirect(`/`)
//             })
//         })
//     })
// }

//save problem with new solutions