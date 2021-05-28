const express     = require('express');
const addBookRout = express.Router();

const BData        = require('../model/BData');
const { response } = require('express');

function navBook(nav)
{
    addBookRout.get('/',function(req,res)
    {
        res.render("addBook",
        {
                nav, 
                title: 'Library'
        });
    });

    addBookRout.post('/addB', function(req,res)
    {
        var item =  
        {
                title   : req.body.title,
                author  : req.body.author,
                genre   : req.body.genre,
                image   : req.body.image
        }

        var DB_Book = BData(item);
        DB_Book.save();
        res.redirect('/addBook');
    });

return addBookRout;

}

module.exports = navBook;
