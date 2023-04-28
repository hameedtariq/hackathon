const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(ApiError.badRequest('You can upload only images'));
        }
    }
    //TODO: Implement a size limit. Resize image on frontend.
});

module.exports = upload;