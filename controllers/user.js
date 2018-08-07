const User = require("../models/User")

module.exports = {
    new: (req,res) => {
        res.render("user/new")
    },
    show: (req,res) => {
        User.findOne({ _id: req.params.id})
        .then(user => {
            res.render("user/show", { user })
        })
    },
    create: (req,res) => {
        User.create({
            local: {
                email: req.body.email,
                password: req.body.password
            }
            }).then(user =>{
                res.redirect("app/index")
            })

    }

}