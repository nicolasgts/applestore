const express = require('express')
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
const appleStore = require('../api/appleStore')
const purchaseService = require('../api/purchaseService')
const userService = require('../api/userService')
const productService = require('../api/productService')


module.exports = function (server) {

  server.use('/api', userService)
  server.use('/api', purchaseService)
  server.use('/api',productService)

}
