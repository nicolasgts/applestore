const express = require('express')
const appleStore = require('../api/appleStore')
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });

var router = express.Router()

 // Rotas para /user
 router.route('/user')
 .get(urlencodeParser, function (req, res) {

   appleStore.User.find()
     .populate('purchases')
     .exec(function (err, users) {
       if (err)
         res.send(err)

       res.json(users);
     });

 })
 .post(function (req, res) {

   var user = new appleStore.User();		
   user.name = req.body.name;  
   user.lastName = req.body.lastName;
   user.email = req.body.email;
   user.phoneNumber = req.body.phoneNumber;
   user.date = req.body.date;
   user.purchases = req.body.purchases;

   user.save(function (err) {
     if (err)
       res.send(err);

     res.json({ message: 'User created!' });
   });


 });





//rotas para user/:id


router.route('/user/:user_id')
 .get(urlencodeParser, function (req, res) {

   appleStore.User.findById(req.params.user_id)
     .populate('purchases')  // quando retorna o objeto na query ele pega o objeto pelo id e retorna completo , mas no modelo ele continua pegando so o id
     .exec(function (err, user) {
       if (err)
         res.send(err)

       res.json(user);
     });

 })
 .put(function (req, res) {

   appleStore.User.findById(req.params.user_id, function (err, user) {

     if (err)
       res.send(err);

     user.name = req.body.name;
     user.lastName = req.body.lastName;
     user.email = req.body.email;
     user.phoneNumber = req.body.phoneNumber;
     user.date = req.body.date;
     user.purchases = req.body.purchases;

     user.save(function (err) {
       if (err)
         res.send(err);

       res.json({ message: 'User updated' });
     });
   })


 })

 .delete(function (req, res) {
   appleStore.User.remove({
     _id: req.params.user_id
   }, function (err, user) {
     if (err)
       res.send(err);

     res.json({ message: 'Successfully deleted' });
   });
 });




// ROTAS /user/:user_id/purchases

router.route('/user/:user_id/purchases')
 .post(function (req, res) {

   appleStore.User
   .findById(req.params.user_id, function (err, user) {
     if (err) {
       res.send(err)
       return
     }

     var purchase = new appleStore.Purchase();
     purchase.user = user._id; //colocar user  
     purchase.totalValue = req.body.totalValue;
     purchase.products = req.body.products;

     purchase.save(function (err) {
       if (err)
         res.send(err);

       res.json({ message: 'Purchase created!' });
     });

     user.purchases.push(purchase._id)

     user.save(function (err) {
       if (err)
         res.send(err);

       res.json({ message: 'Purchase created!' });
     });



   });
 })
 .get( urlencodeParser, function(req, res){
   
         appleStore.Purchase.find( { user: req.params.user_id}, function(err, purchase){
           if(err)
             res.send(err)
   
           res.json(purchase);
         });
         
     });


  router.route('/user/:user_id/purchases/:approved')   
  .get( urlencodeParser, function(req, res){
      
            appleStore.Purchase.findOne( { user: req.params.user_id, approved: req.params.approved}, function(err, purchase){
              if(err)
                res.send(err)
      
              res.json(purchase);
            });
            
        });



 module.exports = router