const { Mongoose } = require("mongoose");

const mong = require('mongoose');

mong.connect('mongodb://localhost:27017/Library_MS_DB');

const Schema1 = mong.Schema;

const AuthSchema = new Schema1
({
    name            : String,
    years_active    : String,
    era             : String,
    fam_work        : String,
    Pic             : String,
    Bio             : String
});

var AuthorData = mong.model('NewAuthor', AuthSchema);

module.exports = AuthorData; 





