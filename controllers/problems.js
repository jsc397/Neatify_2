const Problem = require("../models/Problem")

module.exports = {
    index: (req, res) => {
        console.log(req);
        console.log(res)
        
        res.render("problem/showall")
    }
}