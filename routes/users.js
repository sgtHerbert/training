var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next){   
    var name = req.body.name;
    var mdp  = req.body.mdp;
    var connected = false;

    var users = require('../bdd/users');
    users.forEach(function(user) {
        if (user.name == name && bcrypt.compareSync(mdp, user.mdp))connected = true;
    }, this);
    if (connected)res.send("connected");
    else res.send("user not found");
});

//generate a set of user with their crypted password
// router.get('/generate',function(req, res, next){

//     var json = [{ "name": "toto", "mdp":"1", , "pseudo" : "toto"}, { "name": "tata", "mdp":"2", "pseudo" : "tata"}, {"name": "zambla", "mdp":"3", "pseudo" : "zambla"}];
//     json.forEach(function(user){
//         user.mdp = bcrypt.hashSync(user.name, 10);
//     })

//     require('fs').writeFile('./bdd/users.json', JSON.stringify(json), function(err){
//          if(err) console.log(err);
//          else("usr.json updated");
//     });

//     res.send("users generated");
// });

var fs = require('fs');

/* Searching */

var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var jsondata = JSON.stringify(require('../users.json'));
  res.send(jsondata);
});

router.get('/update', function(req, res) {
  
    // var userdata = '../users.json';
    // var userdataObject = require(userdata);
      var file = require('../bdd/users');
  
      console.log(file[0]);
      file[0].name = "Ttiti";
      console.log(JSON.stringify(file));
      require('fs').writeFile('../bdd/users', JSON.stringify(file), function(err){
           if(err) console.log(err);
           else("users.json updated");
      });
      res.send(JSON.stringify(file));
  });
module.exports = router;
