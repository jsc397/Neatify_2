// mongoose.connect('mongodb://localhost/db_name')
const mongoose = require("mongoose");
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect(
    "mongodb://localhost:27017/neatify_2",
    { useNewUrlParser: true }
  );
}
mongoose.Promise = Promise;
module.exports = mongoose;
