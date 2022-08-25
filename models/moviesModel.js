const mongoose = require('../config/mongoDb');
const errorMessage = require('../utils/errorMessage');

const moviesSchema = mongoose.Schema({
    img:{
        type: String,
        required: [true, errorMessage.GENERAL.obligatorio],
    },
    title:{
        type: String,
        required: [true, errorMessage.GENERAL.obligatorio],
        minLength: [2, errorMessage.GENERAL.minLength]
    },
    date:{
        type: Number,
        required: [true, errorMessage.GENERAL.obligatorio],
    },
    rate:{
        type: Number,
        required: [true, errorMessage.GENERAL.obligatorio],
        min: [1, errorMessage.MOVIES.min],
        max: [5, errorMessage.MOVIES.max]
    },
    genre:[{
        type: mongoose.Schema.ObjectId,
        ref: "genre"
    }],
    characters:[{
        type: mongoose.Schema.ObjectId,
        ref: "characters"  
    }]
});

module.exports = mongoose.model("movies", moviesSchema)