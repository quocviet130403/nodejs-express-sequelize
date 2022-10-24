const { Trip, State } = require("../models")

const addTrip = async (req, res) => {
    const { toState, fromState, price, timeStart} = req.body;
    try {
        const newTrip = await Trip.create({ toState, fromState, price, timeStart});
        res.status(200).send(newTrip)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllTrip = async (req, res) => {
    try {
        const trips = await Trip.findAll({
            include: [
                {
                    model: State,
                    as: "from",
                },
                {
                    model: State,
                    as: "to",
                }
            ]
        })
        res.status(200).send(trips)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addTrip,
    getAllTrip
}