const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizaSchema= new Schema({
    title: {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    price : {
        type : Number,
        require : true,
    }
}, { timestamps : true});

const Pizza = mongoose.model('Blog', pizaSchema)
module.exports = Pizza;