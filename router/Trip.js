const express = require("express");
const auth = require("../helper/auth")
const router = express.Router();
const { postTrip, postBookTrip, getTrip } = require("../controller/Trip");
router.post("/trip", postTrip);
router.post("/trip/booking", auth(), postBookTrip)
router.get("/trip", getTrip);
module.exports = router;
