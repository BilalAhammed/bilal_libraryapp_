const express = require('express');
const addAuthRout = express.Router();

const AuthData = require('../model/AuthData');
const { response } = require('express');

function navAuth(nav)
{
    addAuthRout.get('/',function(req,res)
    {
        res.render("addAuth",
        {
                nav, 
                title: 'Library'
        })
    })

    addAuthRout.post('/addA', function(req,res)
    {
        var item =  
        {
            name            : req.body.name,
            years_active    : req.body.years_active,
            era             : req.body.era,
            fam_work        : req.body.fam_work,
            Pic             : req.body.Pic,
            Bio             : req.body.Bio
        }

        var DB_Author = AuthData(item);
        DB_Author.save();
        res.redirect('/addAuth');
    });

return addAuthRout;

}

module.exports = navAuth;
