const express = require('express');
const { addState, getAllState, getStateById, updateStateById, deleteStateById } = require('../controllers/stateController');
const { checkExist } = require('../middlewares/exist/checkExist')
const { State } = require("../models");
const stateRouter = express.Router();

stateRouter.post('/', addState)
stateRouter.get('/', getAllState)
stateRouter.get('/:id', checkExist(State), getStateById)
stateRouter.put('/:id', checkExist(State), updateStateById)
stateRouter.delete('/:id', checkExist(State), deleteStateById)

module.exports = {
    stateRouter
}
