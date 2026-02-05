const router = require("express").Router();
const {getUserInfo} = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/profile",getUserInfo);


module.exports = router;