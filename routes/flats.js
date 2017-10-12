var express = require('express');
var router = express.Router();
var fs = require('fs');
var moment = require('moment');
/* Searching */
router.get('/search', function(request, response, next) {
  
  var ville = request.query.ville;
  var pays = request.query.pays;
  var json = JSON.parse(fs.readFileSync("./bdd/rent.json"));
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
  
  var file = require('./bdd/rent.json');
  var json = JSON.parse(fs.readFileSync("./bdd/rent.json"));

  var dateNow = moment().format("DD-MM-YYYY");
  if(moment(dateNow).isSameOrAfter(json[idAppart].datedisponibilite,"day")){
    file[idAppart].datedisponibilite = newDateDispo;
    response.send(200,"Ok");
  }
  else{
    response.send(200,"Cet appartement est indisponible");
  }


  fs.writeFile('./bdd/rent.json', JSON.stringify(file,null,4), 'utf8');

});
module.exports = router;