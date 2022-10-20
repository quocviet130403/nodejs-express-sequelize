const express = require('express');
const { stateRouter } = require('./state.router');

const rootRouter = express.Router();

rootRouter.use('/', stateRouter);

module.exports = {
    rootRouter
};

