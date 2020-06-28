const dotenv = require('dotenv'); 
dotenv.config()

module.exports = {
    mongoURI: process.env.REACT_APP_MONGO_URI,
    secretOrKey: "secret"
  };

