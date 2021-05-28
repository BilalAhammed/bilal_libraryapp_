const express  = require('express');
const authRout = express.Router();
const AuthData = require('../model/AuthData');

function navAR(nav)
{
    authRout.get('/',function(req,res)
    {
        AuthData.find()
        .then(function(AuthDet)
        { 
            res.render("authors",
            {
                    nav, 
                    title: 'Library',
                    AuthDet
            });
        })
    });

    authRout.get('/:cnt', function(req,res)
    {
        const cnt = req.params.cnt;
        AuthData.findOne({_id:cnt})
        .then(function(author)
        {
            res.render('author',
            {
                nav,
                title: 'Library',
                author
            });
        })
    });

return authRout;

}

module.exports = navAR;
