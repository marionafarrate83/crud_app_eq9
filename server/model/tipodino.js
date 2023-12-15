const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    descripcion : {
        type : String,
        required: true
    },
    imagen : String,
    alias : {
        type: String,
        required: true
    }
})

const tipoDinodb = mongoose.model('tipoDinodb', schema);

module.exports = tipoDinodb;