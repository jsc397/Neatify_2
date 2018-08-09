const User = require("../models/User")
const { Solution, Comment } = require("../models/Solution")

module.exports = {
    show: (req, res) => {
        User.findOne({_id: req.params.id})
            .populate({
                path: "solutions",
                options: { limit: 5}
            })
            .then(user => {
                res.render("user/show", { user })
            })
    },
    
    new: (req,res) => {
        res.render("user/new")
    },
    
    create: (req,res) => {
        User.create({
            local: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(user => {
            res.redirect(`/user/${user._id}`)
        })
    },
    delete: (req, res) => {
        res.status(400)
    }
}