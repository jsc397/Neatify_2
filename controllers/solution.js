const { Solution, Comment}  = require("../models/Solution")


module.exports = {
    new: (req,res) => {
        res.render(`/users/${_id}`)

    },

   create: (req,res) => {
       console.log(req.body)
       Solution.create({
           content: req.body.content,
           author: req.user._id
       }).then(solution => {
           User.findOne({_id: req.body.author})
           .then(user => {
               user.solutions.push(solution);
               user.save(err => {
                   res.redirect(`/user/${user._id}`)
               })
           })
       })
   }

}
