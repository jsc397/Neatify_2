const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const methodOverride = require('method-override');


app.set('view engine', 'hbs')
// app.use(express.static('./public'))
// app.use(express.static(path.join(__dirname, './public')))

app.use(express.static(path.join(__dirname, '/public')));


hbs.registerPartials(__dirname + "/views/partials");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

// app.use(nestedKeys("")) //how do i use this nested keys...because i need to delete the comments that users put on solutions
app.use(require("./routes/index.js"));

app.listen(2000, () => console.log("Locked and loaded on port 2000"))