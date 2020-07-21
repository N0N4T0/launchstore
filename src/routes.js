const express = require('express')
const routes = express.Router()
const ProductController = require("../src/app/controllers/ProductController")

// Rotas
routes.get('/', function(req, res) {
    return res.render("layout.njk")
})


routes.get('/products/create', ProductController.create)


routes.get('/ads/create', function(req,res){
    return res.redirect("/products/create")
})

module.exports = routes