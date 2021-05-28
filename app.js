const express = require('express');
const navR  = require('./src/routes/bookRoutes');//returning from book router page
const navAR = require('./src/routes/authRoutes');//returing from author router page
const navSU = require('./src/routes/signupRoute');//returning from signup router page
const navLN = require('./src/routes/loginRoute');//returning from login router page

const app = express();
const PORT = process.env.PORT || 2000;

const nav = [
    {
        link:'/books', name:'Books'
    },
    {
        link:'/authors', name:'Authors'
    },
    {
        link:'/signup', name:'New Users - Sign Up'
    },
    {
        link:'/login', name:'Login'
    },
    {
        link:'/addBook', name:'Add New Books'
    },
    {
        link:'/addAuth', name:'Add New Authors'
    }
];

const booksRout = require('./src/routes/bookRoutes')(nav);
const authRout  = require('./src/routes/authRoutes')(nav);
const signRout  = require('./src/routes/signupRoute')(nav);
const logRout  = require('./src/routes/loginRoute')(nav);
const addBookRout  = require('./src/routes/addBookRoute')(nav);
const addAuthRout = require('./src/routes/addAuthRoute')(nav);


app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));//folder name is 'public'

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRout);
app.use('/authors',authRout);
app.use('/signup',signRout);
app.use('/login',logRout);
app.use('/addBook',addBookRout);
app.use('/addAuth',addAuthRout);

app.get('/',function(req,res)
{
    res.render("index",
    {
            nav,
            title: 'Library'
    });
});

app.listen(port,()=>{console.log("server ready at" + port)});   