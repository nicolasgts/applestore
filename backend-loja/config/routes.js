const express = require('express')
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended:false});
const appleStore = require('../api/appleStore')


module.exports = function(server){
  // const router = express.Router()
  // server.use('/api', router)


  //appleStoreService.register(router,'/appleStore')

    server.get('/allUser', urlencodeParser, function(req, res){

      appleStore.User.find(function(err, users){
        if(err)
          res.send(err)

        res.json(users);
      });

    });

}
