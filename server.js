const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
// const path = require("path");
const methodOverride = require("method-override");
const app = express();
require("./config/passport")(passport);
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(cookieParser());
hbs.registerPartials(__dirname + "/views/partials");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./routes/index.js"));
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
