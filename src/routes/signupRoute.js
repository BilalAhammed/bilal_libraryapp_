const express = require('express');
const signRout = express.Router();

const SignUpData   = require('../model/SignUpData');
const { response } = require('express');

function navSU(nav)
{
    signRout.get('/',function(req,res)
    {
        res.render("signup",
        {
                nav, 
                title: 'Library'
        });
    });

signRout.post('/addU', function(req,res)
{
       
        var item =  
        {
            fnam    : req.body.fnam,
            lnam    :   req.body.lnam,
            age     :    req.body.age,
            gen1    :   req.body.gen1,
            gen2    :   req.body.gen2,
            ema     :    req.body.ema,
            mob     :    req.body.mob,
            usr     :    req.body.usr,
            pas     :    req.body.pas,
            cpas    :   req.body.cpas
        }

        var DB_User = SignUpData(item);
        DB_User.save();
        res.redirect('/signup');
    });


return signRout;

}

module.exports = navSU;
