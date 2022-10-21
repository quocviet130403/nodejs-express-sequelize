const express = require('express');
const { stateRouter } = require('./state.router');
const { userRouter } = require('./user.router');

const rootRouter = express.Router();

rootRouter.use('/states', stateRouter);
rootRouter.use('/user', userRouter);

module.exports = {
    rootRouter
};

