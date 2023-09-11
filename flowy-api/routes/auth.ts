import express from "express";
const router = express.Router();

const {
  register,
  validated,
} = require("../controllers/authentication/register");
const { login } = require("../controllers/authentication/login");

router.post("/register", register);
router.post("/validate", validated);
router.post("/login", login);
module.exports = router;
