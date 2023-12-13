const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    alias : {
        type: String,
        required: true
    },
    gender : String,
    picture : String
})

const Dinodb = mongoose.model('dinodb', schema);

module.exports = Dinodb;