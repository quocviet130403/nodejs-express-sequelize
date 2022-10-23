const express = require('express');
const { register, login, uploadAvatar } = require('../controllers/userController');
const { checkExist } = require('../middlewares/exist/checkExist');
const { updateImage } = require('../middlewares/image/UploadImage');
const { User } = require("../models");
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.put('/avatar/:id', updateImage('avatar'), uploadAvatar)

module.exports = {
    userRouter
}