const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} = require("../controllers/company.controller.js");
const upload = require("../middlewares/mutler.js");

const router = express.Router();

router.route("/register").post(isAuthenticated(), registerCompany);
router.route("/get").get(isAuthenticated(), getCompany);
router.route("/get/:id").get(isAuthenticated(), getCompanyById);
router
  .route("/update/:id")
  .put(isAuthenticated(), upload.single("file"), updateCompany);

module.exports = router;
