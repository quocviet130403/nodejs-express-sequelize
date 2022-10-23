const multer  = require('multer')
const mkdirp = require('mkdirp')

const updateImage = (text) => {
    const made = mkdirp.sync(`./public/images/${text}`)
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${text}`)
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })

    const upload = multer({ 
        storage: storage,
        fileFilter: function (req, file, cb) {
            const extensionList = ['.png','.jpg'];
            const extension = file.originalname.slice(-4);
            if(extensionList.includes(extension)){
                cb(null,true)
            }else{
                cb(new Error("extension không hợp lệ"))
            }
        }
     })
    return upload.single(text)

}

module.exports = {
    updateImage
}