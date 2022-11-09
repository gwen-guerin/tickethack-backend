const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    trip : String,
    date : String,
    price: String
})

module.exports = mongoose.model('carts' , cartSchema)