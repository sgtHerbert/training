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


module.exports = router;
