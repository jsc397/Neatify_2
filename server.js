const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const app = express();
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
