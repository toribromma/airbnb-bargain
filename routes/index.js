const path = require("path");
const router = require("express").Router();
const apiUsersRoutes = require("./api/users");
const apiMashRoutes = require("./api/mashvisor");

// API Routes
router.use("/api", apiUsersRoutes);
router.use("/api", apiMashRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
  module.exports = router;
  