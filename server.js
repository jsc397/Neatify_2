const express = require('express')
const hbs = require("hbs")
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))

app.use(require('./routes/index.js'))

app.listen(2000, () => console.log("Locked and loaded on port 2000"))
