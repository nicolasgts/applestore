const express = require('express')
const appleStore = require('../api/appleStore')
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

var router = express.Router()

 //ROTAS para /purchase
  
 router.route('/purchase')
 .get(function (req, res) {

   appleStore.Purchase.find()
     .populate('user')
     .exec(function (err, purchases) {
       if (err)
         res.send(err)

       res.json(purchases);
     });

 })
 .post(function(req,res){

  var purchase = new appleStore.Purchase();
  purchase.user = "59d3d46bf47991074cd2caaf"; //colocar user  
  purchase.totalValue = req.body.totalValue;
  purchase.products = req.body.products;

  purchase.save(function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'Purchase created!' });
  });
 });


 //rotas para /purchase/id

 router.route('/purchase/:pur_id')
 .get(urlencodeParser, function (req, res) {

   appleStore.Purchase.findById(req.params.pur_id)
     .populate('user')  // quando retorna o objeto na query ele pega o objeto pelo id e retorna completo , mas no modelo ele continua pegando so o id
     .exec(function (err, purchase) {
       if (err)
         res.send(err)

       res.json(purchase);
     });

 })
 .put(function (req, res) {

   appleStore.Purchase.findById(req.params.pur_id, function (err, purchase) {

     if (err)
       res.send(err);

       purchase.user = user._id;
       purchase.totalValue = req.body.totalValue;
       purchase.approved = req.body.approved;
       purchase.products = req.body.products;
    

     purchase.save(function (err) {
       if (err)
         res.send(err);

       res.json({ message: 'Product updated' });
     });
   })


 })

 .delete(function (req, res) {
   appleStore.Purchase.remove({
     _id: req.params.pur_id
   }, function (err, pur) {
     if (err)
       res.send(err);

      

     res.json({ message: 'Successfully deleted' });
   });
 });

// 

 router.route('/purchase/:approved')
 .get(urlencodeParser, function (req, res) {

   appleStore.Purchase.findOne(req.params.approved)
     .populate('user')  // quando retorna o objeto na query ele pega o objeto pelo id e retorna completo , mas no modelo ele continua pegando so o id
     .exec(function (err, purchase) {
       if (err)
         res.send(err)

       res.json(purchase);
     });

 });





 module.exports = router