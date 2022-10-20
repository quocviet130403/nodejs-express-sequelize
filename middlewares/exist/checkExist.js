const checkExist = (Model) => {
    return async (req, res, next) => {
        const id = req.params.id;
        try {
            const item = await Model.findOne({
                where: {
                    id: id
                }
            })
            if(item){
                next()
            }else{
                res.status(200).send(`${id} không tồn tại`);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = {
    checkExist
}
