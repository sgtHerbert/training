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
    
  });
  

module.exports = router;