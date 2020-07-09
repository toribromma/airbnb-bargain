require("dotenv").config();
var axios = require("axios");
const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");


router.get("/search", (req, res) => {

    axios({
        "method":"GET",
        "url":"https://mashvisor-api.p.rapidapi.com/airbnb-property/active-listings",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"mashvisor-api.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_MV_KEY,
        "useQueryString":true
        },"params":{
        "zip_code":"90210",
        "page":"1",
        "city":"Los Angeles",
        "items":"10",
        "state":"CA"
        }
        })
        .then(function (response) {
            console.log(response.data.content.properties)
            console.log("hey")
        })
    
})

module.exports = router;