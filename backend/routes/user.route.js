// import express from "express";
// import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { singleUpload } from "../middlewares/mutler.js";

const express = require("express");
const {
  login,
  logout,
  register,
  updateProfile,
} = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const upload = require("../middlewares/mutler.js");

const router = express.Router();

router.route("/register").post(upload.single("file"), register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated(), upload.single("file"), updateProfile);

module.exports = router;
