const { Mongoose } = require("mongoose");

const mong = require('mongoose');

mong.connect('mongodb://localhost:27017/Library_MS_DB');

const Schema = mong.Schema;

const BookSchema = new Schema
({
    title : String,
    author : String,
    genre : String,
    image: String
});

var BData = mong.model('NewBook', BookSchema);

module.exports = BData;




