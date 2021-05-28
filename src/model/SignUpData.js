const { Mongoose } = require("mongoose");

const mong = require('mongoose');

mong.connect('mongodb://localhost:27017/Library_MS_DB');

const Schema2 = mong.Schema;

const SignUpSchema = new Schema2
({
        fnam:   String,
        lnam:   String,
        age:    String,
        gen1:   String,
        gen2:   String,
        ema:    String,
        mob:    String,
        usr:    String,
        pas:    String,  
        cpas:   String
});

var SignUpData = mong.model('NewUser', SignUpSchema);

module.exports = SignUpData; 





