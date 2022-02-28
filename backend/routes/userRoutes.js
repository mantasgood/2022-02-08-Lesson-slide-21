const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUser,
  loginUser,
} = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/test", getUser);

module.exports = router;
