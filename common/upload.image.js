const multer  = require('multer')
const { v4: uuidv4 } = require('uuid');

module.exports.uploadImg=(path)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'imgs/')
        },
        filename: function (req, file, cb) {
         
          cb(null,uuidv4() +'-'+ file.originalname)
        }
      })
      
      const upload = multer({ storage: storage })
     return upload.single(path)
}