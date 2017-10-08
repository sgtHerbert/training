var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next){
    
    var name = req.body.name;
    var mdp  = req.body.mdp;
    var connected = false;

    require('fs').readFile('./bdd/users.json', 'utf-8', function(err, data){
        if(!err){
            var checker = false;
            jsonfile = JSON.parse(data);
            Array.from(jsonfile).forEach(function(user) {
                if (user["name"] == name && user["mdp"] == mdp)checker = true;
            });
            if (checker)res.send("connected");
            else res.send("no user found");
        }else{
            res.send('error');
        }
    });
})

module.exports = router;