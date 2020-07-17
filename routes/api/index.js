const router = require("express").Router();
const mashvisorRoutes = require("./mashvisor");
const usersRoutes = require("./users");

router.use("/mashvisor", mashvisorRoutes);
router.use("/users", usersRoutes);

module.exports = router;