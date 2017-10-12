var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
});

router.get('/update', function(req, res) {
  
    // var userdata = '../users.json';
    // var userdataObject = require(userdata);
      var file = require('../users');
  
      console.log(file[0]);
      file[0].name = "Ttiti";
      console.log(JSON.stringify(file));
      require('fs').writeFile('../users.json', JSON.stringify(file), function(err){
           if(err) console.log(err);
           else("users.json updated");
      });
      res.send(JSON.stringify(file));
  });
  

module.exports = router;
