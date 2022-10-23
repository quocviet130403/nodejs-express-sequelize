const { User } = require("../../models");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const isLogin = async (req, res, next) => {
    const { token } = req.headers
    try {
        const decoded = jwt.verify(token, 'vietdz1304')
        if(decoded){
            const user = await User.findOne({
                where:{
                    email: decoded.data.email
                }
            })
            if(user && bcrypt.compareSync(decoded.data.password, user.password)){
                req.user = user
                next();
            }else{
                res.send("Vui lòng đăng nhập")
            }
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    isLogin
}