var axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/search", (req, res) => {

    
    console.log(req.query.state)
    console.log(req.query.zip)
    console.log(req.query.city)
    
    axios(
        {
        "method":"GET",
        "url":"https://mashvisor-api.p.rapidapi.com/airbnb-property/active-listings",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"mashvisor-api.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_MV_KEY,
        "useQueryString":true
        },"params":{
        "zip_code":`${req.query.zip}`,
        "page":"1",
        "city":`${req.query.city}`,
        "items":"10",
        "state":`${req.query.state}`
        }
        }
        // `https://jsonplaceholder.typicode.com/todos?userId=1&completed=false`
        )
        .then(response => {
        //    console.log(response.data)
                res.json(response.data)
    
        })
        .catch(err => {
            console.log(err);
          });
})

module.exports = router;