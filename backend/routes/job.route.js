const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} = require("../controllers/job.controller.js");

const router = express.Router();

router.route("/post").post(isAuthenticated(), postJob);
router.route("/get").get(isAuthenticated(), getAllJobs);
router.route("/getadminjobs").get(isAuthenticated(), getAdminJobs);
router.route("/get/:id").get(isAuthenticated(), getJobById);

module.exports = router;
