const { User } = require("../models");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, phone, email, password, note } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, phone, password: hashPass, email, note });
        res.status(200).send(newUser);
    } catch (error) {   
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({
            where:{
                email: email
            }
        })
        if(user && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign({
                data: {email, password}
            }, 'vietdz1304', { expiresIn: 60 * 60 });
            res.send({messange: "Đăng nhập thành công", token})
        }else{
            res.send("Tài khoản mật khẩu không chính xác")
        }
    } catch (error) {
        res.send(error)
    }
    
}

module.exports = {
    register,
    login
}