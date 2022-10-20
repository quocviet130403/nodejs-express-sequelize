const { State } = require("../models");

const addState = async (req, res) => {
    const { name, address, province } = req.body;
    try {
        const newState = await State.create({ name, address, province });
        await res.status(200).send(newState);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllState = async (req, res) => {
    try {
        const states = await State.findAll();
        await res.status(200).send(states);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getStateById = async (req, res) => {
    const id = req.params.id;
    try {
        const state = await State.findOne({
            where: {
                id: id
            }
        })
        await res.status(200).send(state);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateStateById = async (req, res) => {
    const { name, address, province } = req.body;
    const id = req.params.id;
    try {
        await State.update({ name, address, province },{
            where: {
                id: id
            }
        })
        await res.status(200).send("Cập nhật thành công!!!");
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteStateById = async (req, res) => {
    const id = req.params.id;
    try {
        await State.destroy({
            where: {
                id: id
            }
        })
        await res.status(200).send("Xóa thành công!!!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    addState,
    getAllState,
    getStateById,
    updateStateById,
    deleteStateById
};