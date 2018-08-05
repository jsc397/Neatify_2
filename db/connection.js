const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/neatify_2", { useNewUrlParser: true });
mongoose.Promise = Promise
module.exports = mongoose