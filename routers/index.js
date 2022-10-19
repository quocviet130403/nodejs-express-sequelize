const express = require('express');
const stateRouter = require('./state.router');

const rootRoute = express.Router();

rootRoute.use('/state/',stateRouter);

module.exports = rootRoute;

