const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + ' ' + file.originalname);
    }
});
const upload = multer({
    storage
    //TODO: Implement a size limit. Resize image on frontend.
});

module.exports = upload;