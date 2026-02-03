const router = require("express").Router();
const User = require("../model/user");
const {registerUser,loginUser} = require("../controllers/authControllers");


//Auth Routes
router.post("/register",registerUser);
router.post("/login",loginUser);

module.exports = router;