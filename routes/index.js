var express = require('express');
var router = express.Router();
var fs = require('fs');
app = express();

var updateJsonFile = require('update-json-file');
// var userRead = fs.readFileSync('./user.json');
// var userParse = JSON.parse(userRead);

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express'});
  var jsondata = JSON.parse(fs.readFileSync('../users.json'));
  res.send(jsondata);
});
// router.get('/update/:name', function(req, res) {
//   // res.render('index', { title: 'Express'});
//   var object = {"dirt":"just dirt", "sand":"toto"};
//   response.send(request.params.name + ":" + object[request.params.name]);
  
//       var nom = object[request.params.name];
//       if (!nom){
//           response.status(404).json("not found")
//       }
//  });

// router.get('/update', function(req, res) {

//   // var userdata = '../users.json';
//   // var userdataObject = require(userdata);
//     var file = require('../users');

//     console.log(file[0]);
//     file[0].name = "Toto";
//     console.log(JSON.stringify(file));
//     require('fs').writeFile('../users.json', JSON.stringify(file), function(err){
//          if(err) console.log(err);
//          else("users.json updated");
//     });
//     res.send(JSON.stringify(file));
// });









module.exports = router;
