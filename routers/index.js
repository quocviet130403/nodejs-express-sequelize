const express = require('express');
const { stateRouter } = require('./state.router');
const { ticketRouter } = require('./ticket.router');
const { tripRouter } = require('./trip.router');
const { userRouter } = require('./user.router');

const rootRouter = express.Router();

rootRouter.use('/states', stateRouter);
rootRouter.use('/user', userRouter);
rootRouter.use('/trip', tripRouter);
rootRouter.use('/ticket', ticketRouter);

module.exports = {
    rootRouter
};

