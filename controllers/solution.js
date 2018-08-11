const { Solution, Comment}  = require("../models/Solution")


module.exports = {
   create: (req,res) => {
       Solution.create({
           content: req.body.content,
           author: req.user._id
       }).then(solution => {
           User.findOne({_id: req.body.author})
           .then(user => {
               user.solutions.push(solution);
               user.save(err => {
                   res.redirect(`/user/${user._id`)
               })
           })
       })
   }

}
