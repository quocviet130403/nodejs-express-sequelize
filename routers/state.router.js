const express = require('express');
const { addState } = require('../controllers/stateController');
const stateRouter = express.Router();

stateRouter.post('/', addState)

module.exports = stateRouter
