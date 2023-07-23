const mongoose = require('mongoose')
const productSchme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        require: true
    }
});
const Product = mongoose.model('Product',productSchme)
module.exports = Product
