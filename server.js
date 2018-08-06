const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const appController = require('../controllers/appController')

const app = express()
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public/images')) //make images folder to use this
app.use(express.static('public/css')) //link to css folder in public
// app.use()

app.listen(2000, () => console.log("Locked and loaded on port 2000"))
