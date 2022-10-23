const { User } = require("../../models");
const bcrypt = require('bcryptjs');

const isAdmin = async (req, res, next) => {
    const decode = req.user
    console.log(decode.type)
    try {
        if(decode.type === "ADMIN"){
            next();
        }else{
            res.send("Bạn không có quyền truy cập")
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    isAdmin
}