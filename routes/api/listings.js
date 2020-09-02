// const express = require("express");
// const router = express.Router();

// const User = require("../../models/User")
// const Listings = require("../../models/Listings");


// router.post("/save", ({ body }, res) => {
//     Listings.create(body)
//         .then(({_id}) => User.findOneAndUpdate({}, {$push: {listings: _id}}, {new:true}))
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// })