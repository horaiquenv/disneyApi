const mongoose = require("../config/mongodb");
const errorMessage = require("../utils/errorMessage")
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, errorMessage.GENERAL.obligatorio],
    minLength: [3, errorMessage.GENERAL.minLength],
  },
  email: {
    type: String,
    required: [true, errorMessage.GENERAL.obligatorio],
    unique: [true, errorMessage.GENERAL.unique]
  },
  password: {
    type: String,
    required: [true, errorMessage.GENERAL.obligatorio],
  },
});

usersSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("users", usersSchema);