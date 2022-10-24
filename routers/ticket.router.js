const express = require("express");
const { addTicket, getAllTripByTicket } = require("../controllers/ticketController");
const ticketRouter = express.Router()

ticketRouter.post('/', addTicket);
ticketRouter.get('/', getAllTripByTicket);

module.exports = {
    ticketRouter
}