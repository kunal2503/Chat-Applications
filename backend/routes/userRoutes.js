const router = require("express").Router();
const {getUserInfo,getContactDetails} = require("../controllers/userControllers");
const {authMiddleware} = require("../middleware/authMiddleware");


router.get("/profile",authMiddleware,getUserInfo);
router.get("/contact",authMiddleware,getContactDetails);


module.exports = router;