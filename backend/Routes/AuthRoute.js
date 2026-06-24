const { Signup , Login, Logout } = require("../Controller/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/",userVerification);
router.get("/logout",Logout);


module.exports = router;