const mongoose = require('../config/mongoDb');
const errorMessage = require('../utils/errorMessage');

const genreSchema = mongoose.Schema ({
    name:{
        type: String,
        required: [true, errorMessage.GENERAL.obligatorio],
        minLength: [2, errorMessage.GENERAL.minLength]
    },
    img:{
        type: String,
        required: [true, errorMessage.GENERAL.obligatorio],
    },
    movies: {
        type: Array
    }
})

module.exports = mongoose.model("genre", genreSchema)