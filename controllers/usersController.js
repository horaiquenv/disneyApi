const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorMessage = require("../utils/errorMessage")

module.exports = {
  addUser: async function (req, res, next) {
    try {
      const user = new usersModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const document = await user.save();
      console.log(req.body);
      res.status(201).json(document);
      console.log(document);
    } catch (error) {
      console.log(error);
      next(e);
    }
  },
  login: async function (req, res, next) {
    try {
      const user = await usersModel.findOne({ email: req.body.email });
      if (!user) {
        res.json({ message: errorMessage.USER.authError });
        return;
      }
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id }, "disneyApi", {
          expiresIn: "8h",
        });
        res.status(200).json({ token });
      } else {
        res.json({ message: errorMessage.USER.authError });
        return;
      }
    } catch (e) {
      console.log(e);
    }
  },
   deleteUser: async function (req, res, next) {
    try {
      const user = await usersModel.deleteOne({ _id: req.params.id });
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      next(e);
    }
  }
};