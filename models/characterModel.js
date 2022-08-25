const mongoose = require('../config/mongoDb');
const errorMessage = require('../utils/errorMessage');

const characterSchema = mongoose.Schema({
    img:{
        type: String,
        required: [true, errorMessage.GENERAL.obligatorio]
    },
    name:{
        type: String,
        required: [true, errorMessage.GENERAL.obligatorio],
        minLength: [2, errorMessage.GENERAL.minLength],
    },
    age:{
        type: Number,
        required: [true, errorMessage.GENERAL.obligatorio],
    },
    weight:{
        type: Number,
        required: [true, errorMessage.GENERAL.obligatorio],
    },
    backStory:{
        type: String,
        maxLength: [400, errorMessage.GENERAL.maxLength],
        required: [true, errorMessage.GENERAL.obligatorio],
    },
    movies:{
        type: mongoose.Types.ObjectId,
        ref: "movies",
    }
});

module.exports = mongoose.model("characters", characterSchema);
