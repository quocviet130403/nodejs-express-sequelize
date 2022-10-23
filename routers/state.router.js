const express = require('express');
const { addState, getAllState, getStateById, updateStateById, deleteStateById } = require('../controllers/stateController');
const { isLogin } = require('../middlewares/auth/Authentication');
const { isAdmin } = require('../middlewares/auth/Authorize');
const { checkExist } = require('../middlewares/exist/checkExist')
const { State } = require("../models");
const stateRouter = express.Router();

stateRouter.post('/', isLogin, isAdmin, addState)
stateRouter.get('/', getAllState)
stateRouter.get('/:id', checkExist(State), getStateById)
stateRouter.put('/:id', isLogin, isAdmin,checkExist(State), updateStateById)
stateRouter.delete('/:id', isLogin, isAdmin, checkExist(State), deleteStateById)

module.exports = {
    stateRouter
}
