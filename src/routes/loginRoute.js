const express = require('express');
const logRout = express.Router();

function navLN(nav)
{

var Login = [
    {
        usr:    'Username',
        pas:    'Password',      
    }
]

logRout.get('/',function(req,res)
{
    res.render("login",
    {
            nav, 
            title: 'Library',
            Login
    });
});

// signRout.get('/:cnt', function(req,res){
//     const cnt = req.params.cnt
//     res.render('author',
//     {
//         nav,
//         title: 'Library',
//         author: AuthDet[cnt]
//     });
// });

return logRout;

}

module.exports = navLN;
