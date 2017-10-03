const express = require('express')
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended:false});
const appleStore = require('../api/appleStore')


module.exports = function(server){

  var router = express.Router()
 

    router.route('/user')
    .get( urlencodeParser, function(req, res){
      
            appleStore.User.find(function(err, users){
              if(err)
                res.send(err)
      
              res.json(users);
            });
      
        })
        .post(function(req, res) {
 
          var user = new appleStore.User();		// create a new instance of the Bear model
          user.name = req.body.name;  // set the bears name (comes from the request)
          user.lastName = req.body.lastName;
          user.email = req.body.email;
          user.phoneNumber = req.body.phoneNumber;
          user.date = req.body.date;
          user.purchases = req.body.purchases;

          user.save(function(err) {
            if (err)
              res.send(err);
      
            res.json({ message: 'User created!' });
          });
      
          
        })



    


    server.use('/api', router)

}
