const { State } = require("../models/state");

const addState = async (res, req) => {
    try {
        const { name, address, province } = req.body;
        const newState = await State.create({ name, address, province });
        res.status(200).send(newState);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    addState
};