const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const users = require("./routes/api/users")
const mashvisor = require("./routes/api/mashvisor")
const path = require("path")


// Bodyparser middleare
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json({ type: 'application/*+json' }))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

   app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "./client/build/index.html"));
  });
  
}

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/mashvisor", mashvisor);



const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));