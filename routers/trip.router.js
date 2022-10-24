const express = require("express");
const { addTrip, getAllTrip } = require("../controllers/tripController");
const { isLogin } = require("../middlewares/auth/Authentication");
const { isAdmin } = require("../middlewares/auth/Authorize");
const tripRouter = express.Router();

tripRouter.post('/', isLogin, isAdmin, addTrip)
tripRouter.get('/', getAllTrip)

module.exports = {
    tripRouter
}