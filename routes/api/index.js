const router = require("express").Router();
const mashvisorRoutes = require("./mashvisor");
const userRoutes = require("./users");

router.use("/mashvisor", mashvisorRoutes);
router.use("/users", userRoutes);

module.exports = router;