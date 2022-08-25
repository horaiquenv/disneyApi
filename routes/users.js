var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/register", usersController.addUser);
router.post("/login", usersController.login);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
