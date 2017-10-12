var express = require('express');
var router = express.Router();
<<<<<<< HEAD
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

router.get('/generate',function(req, res, next){

    var json = [{ "name": "toto", "mdp":"1"}, { "name": "tata", "mdp":"2"}, {"name": "zambla", "mdp":"3"}];
    json.forEach(function(user){
        user.mdp = bcrypt.hashSync(user.name, 10);
    })

    require('fs').writeFile('./bdd/users.json', JSON.stringify(json), function(err){
         if(err) console.log(err);
         else("usr.json updated");
    });

    res.send("users generated");
});


=======
var fs = require('fs');
var moment = require('moment');

/* Searching */
router.get('/search', function(request, response, next) {
  
  var ville = request.query.ville;
  var pays = request.query.pays;
  var json = JSON.parse(fs.readFileSync("rent.json"));
  var reponse = [];

  if(ville&&pays){
    pays=0;
  }
  for(i=0;i<json.length;i++){
    if(json[i].ville==ville){
      reponse.push(json[i]);
    }
    else{
      if(json[i].pays==pays){
        reponse.push(json[i]);
      }
    }
  }
  response.send(reponse);
});

/* Booking */
router.get('/booking', function(request, response, next) {
  
  var idAppart = request.query.id;
  var newDateDispo = request.query.date;
  
  var file = require('../rent');
  var json = JSON.parse(fs.readFileSync("rent.json"));

  var dateNow = moment().format("DD-MM-YYYY");
  if(moment(dateNow).isSameOrAfter(json[idAppart].datedisponibilite,"day")){
    file[idAppart].datedisponibilite = newDateDispo;
    response.send(200,"Ok");
  }
  else{
    response.send(200,"Cet appartement est indisponible");
  }


  fs.writeFile('./rent.json', JSON.stringify(file,null,4), 'utf8');

});

>>>>>>> origin/Demheal
module.exports = router;
