var express = require('express');
var router  = express.Router();



//var dialogues = ["c'est quoi ton nom ? ", 'chui pas rassuré', 'regarde à gauche ya des dauphins', "moi c'est zambla", "oua t'es balaise"]

/* GET home page. */
router.get('/', function(req, res) {
    res.render('messaging', { title: 'Messaging' });
});




module.exports = router;
