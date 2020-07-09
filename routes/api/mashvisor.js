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
        "x-rapidapi-key": "",
        "useQueryString":true
        },"params":{
        "zip_code":"90210",
        "page":"1",
        "city":"Los Angeles",
        "items":"10",
        "state":"CA"
        }
        })
        .then((res)=> {
            return res
        })

})

module.exports = router;