const express = require('express')
const routes = express.Router()

const instructors = require('./app/controllers/instructors')
const members = require('./app/controllers/members')


// Rotas
routes.get('/', function(req, res) {
    return res.send("Hello world")
})


module.exports = routes