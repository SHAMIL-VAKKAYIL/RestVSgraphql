const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('book', BookSchema)

