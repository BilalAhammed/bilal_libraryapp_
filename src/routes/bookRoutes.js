const express   = require('express');
const booksRout = express.Router();
const BookData  = require('../model/BData');

function navR(nav)
{
    booksRout.get('/',function(req,res)
    {
        BookData.find()
        .then(function(bookDet)
        {
            res.render("books",
            {
                    nav, 
                    title: 'Library',
                    bookDet
            });
        })
    });

    booksRout.get('/:cnt', function(req,res)
    {
        const cnt = req.params.cnt;
        BookData.findOne({_id:cnt})
        .then(function(book)
        {
            res.render('book',
            {
                nav,
                title: 'Library',
                book
            });
        })
    });

return booksRout;

}

module.exports = navR;
