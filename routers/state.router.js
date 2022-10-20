const express = require('express');
const { addState, getAllState, getStateById, updateStateById, deleteStateById } = require('../controllers/stateController');
const { checkExist } = require('../middlewares/exist/checkExist')
const { State } = require("../models");
const stateRouter = express.Router();

stateRouter.post('/states', addState)
stateRouter.get('/states', getAllState)
stateRouter.get('/states/:id', checkExist(State), getStateById)
stateRouter.put('/states/:id', checkExist(State), updateStateById)
stateRouter.delete('/states/:id', checkExist(State), deleteStateById)

module.exports = {
    stateRouter
}
