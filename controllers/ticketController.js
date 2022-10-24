const { Ticket, sequelize } = require("../models")

const addTicket = async (req, res) => {
    const { user_id, trip_id } = req.body;
    try {
        const newTicket = await Ticket.create({ user_id, trip_id })
        res.status(200).send(newTicket)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllTripByTicket = async (req, res) => {
    try {
        const [ results ] = await sequelize.query(`
            SELECT users.name as user_name, fromSta.name as fromState, toSta.name as toState FROM users
            INNER JOIN tickets ON users.id = tickets.user_id 
            INNER JOIN trips ON trips.id = tickets.trip_id 
            INNER JOIN states as fromSta ON fromSta.id = trips.fromState 
            INNER JOIN states as toSta ON toSta.id = trips.toState 
        `);
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addTicket,
    getAllTripByTicket
}