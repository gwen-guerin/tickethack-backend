const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    trip : String,
    date : Date,
    price: Number
})

module.exports = mongoose.model('carts' , cartSchema)