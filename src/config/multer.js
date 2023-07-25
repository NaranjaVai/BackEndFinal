const multer = require('multer');
const path = require('path');

const uploadFiles = () =>{

    const storage = multer.diskStorage({
        destination: './uploads/docs',
        filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
        }
    })

    const upload = multer({ storage: storage }).array('files')
    return upload
};


module.exports = uploadFiles;