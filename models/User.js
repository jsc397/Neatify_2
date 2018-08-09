const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    local: {
        email: String,
        password: String,
    },
    solutions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Solution"
        }
    ]
})
module.exports = mongoose.model("User", User)
