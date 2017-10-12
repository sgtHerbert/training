'use strict';
var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.get('/mail', function(req, res) {

    var transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        tls: { rejectUnauthorized: false },
        host: 'smtp.gmail.com',
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'weeno.trash@gmail.com',
            pass: 'totolatulipe'
        }
    }));
    // var smtpTransport = mailer.createTransport(
    //     "smtps://weeno.trash%40gmail.com:"+encodeURIComponent('totolatulipe') + "@smtp.gmail.com:465"
    // ); 
  
    // var smtpTransport = mailer.createTransport('SMTP',{
    //     service: "Gmail",
    //     xoauth2: xoauth2.createXOAuth2Generator({
    //         user: "weeno.trash@gmail.com",
    //         pass: "totolatulipe"

    //     })
    // });

    var mail = {
        from: "weeno.trash@gmail.com",
        to: "m.durbet@gmail.com",
        subject: "Notch is coming",
        html: "toto",

    }

    transport.sendMail(mail, function(error, response) {
        if(error){
            console.log(error);   
        }else{
            console.log('mail ok');
        }
    });
    
    // var userdata = '../users.json';
    // var userdataObject = require(userdata);
    //   var file = require('../users');
  
    //   console.log(file[0]);
    //   file[0].name = "Toto";
    //   console.log(JSON.stringify(file));
    //   require('fs').writeFile('../users.json', JSON.stringify(file), function(err){
    //        if(err) console.log(err);
    //        else("users.json updated");
    //   });
    //   res.send(JSON.stringify(file));
  });
  

module.exports = router;