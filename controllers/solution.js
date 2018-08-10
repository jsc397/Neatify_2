const { Solution, Comment}  = require("../models/Solution")


module.exports = {
   create: (req,res) => {
       Solution.create({
           content: req.body.content,
           author: req.user._id
       }).then(solution => {
           req.user.solutions.push(solution);
           req.user.save(err => {
               res.status(400)
               console.log("this is the error" + err)
           })
       })
   }

}
