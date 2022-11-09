const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    trip : String,
    price: Number,
    date : Date,
})

module.exports = mongoose.model('bookings' , cartSchema)