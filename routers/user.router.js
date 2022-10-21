const express = require('express');
const { register, login } = require('../controllers/userController');
const { checkExist } = require('../middlewares/exist/checkExist')
const { User } = require("../models");
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);

module.exports = {
    userRouter
}