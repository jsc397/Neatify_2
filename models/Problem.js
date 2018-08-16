const mongoose = require("../db/connection")
const Schema = mongoose.Schema;
// const { Solution }= require("../models/Solution");

const Problem = new Schema({
    paragraph: String,
    solutions: [
        {
            type: Schema.Types.ObjectId,
            ref: "Solution"
        }
    ]

}) 

module.exports = mongoose.model("Problem", Problem);