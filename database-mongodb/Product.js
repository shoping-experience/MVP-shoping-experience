const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    size:String,
    img:String,

});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;