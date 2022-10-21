const { User } = require("../models");
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, phone, email, password, note } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, phone, password: hashPass, email, note });
        await res.status(200).send(newUser);
    } catch (error) {   
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    
}

module.exports = {
    register,
    login
}