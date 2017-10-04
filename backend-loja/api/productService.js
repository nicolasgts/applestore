const express = require('express')
const appleStore = require('../api/appleStore')
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

var router = express.Router()

 //ROTAS para /products
  
 router.route('/product')
 .get(function (req, res) {

   appleStore.Product.find()
     .exec(function (err, products) {
       if (err)
         res.send(err)

       res.json(products);
     });

 })
 .post(function (req, res) {
    
       var product = new appleStore.Product();		
       product.name = req.body.name;  
       product.description = req.body.description;
       product.quantityAvailable = req.body.quantityAvailable;
       product.price = req.body.price;
    
    
       product.save(function (err) {
         if (err)
           res.send(err);
    
         res.json({ message: 'Product created!' });
       });
    
    
     });


 //rotas para /purchase/id

 router.route('/product/:product_id')
 .get(urlencodeParser, function (req, res) {

   appleStore.Product.findById(req.params.product_id)
     .exec(function (err, product) {
       if (err)
         res.send(err)

       res.json(product);
     });

 })
 .put(function (req, res) {

   appleStore.Product.findById(req.params.product_id, function (err, product) {

     if (err)
       res.send(err);

       product.name = req.body.name;  
       product.description = req.body.description;
       product.quantityAvailable = req.body.quantityAvailable;
       product.price = req.body.price;
    

     product.save(function (err) {
       if (err)
         res.send(err);

       res.json({ message: 'Product updated' });
     });
   })


 })

 .delete(function (req, res) {
   appleStore.Product.remove({
     _id: req.params.product_id
   }, function (err, pur) {
     if (err)
       res.send(err);

      

     res.json({ message: 'Successfully deleted' });
   });
 });





 module.exports = router