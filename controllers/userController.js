const { User } = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const register = async (req, res) => {
    const { name, phone, email, password, note } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, phone, password: hashPass, email, note, avatar: gravatar.url(email) });
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
            res.status(200).send({messange: "Đăng nhập thành công", token})
        }else{
            res.status(200).send("Tài khoản mật khẩu không chính xác")
        }
    } catch (error) {
        res.status(500).send(error)
    }
    
}

const uploadAvatar = async (req, res) => {
    const id = req.params.id;
    try {
        console.log(req.file)
        const user = await User.update({ avatar: req.file.path}, {
            where: {
                id: id
            }
        })
        await res.status(200).send("Cập nhật ảnh thành công!!!");
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register,
    login,
    uploadAvatar
}