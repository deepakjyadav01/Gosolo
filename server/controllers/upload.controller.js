const mongoose = require('mongoose');
require('../middlewares/imageupload');
require('../config/config');
const Image = require('../models/image.model')
const db = mongoose.connection;

let gfs;
db
    .once('open', () => {
        // init stream
        gfs = new mongoose.mongo.GridFSBucket(db.db, {
            bucketName: 'uploads',
        });
    })
    .on('error', (error) => {
        console.log(error);
    });


module.exports.uploadFile = async (req, res) => {
    try {
        let data = new Image({
            filename: req.file.filename,
            caption: req.body.caption,
            category: req.body.category,
            userId: req.userId,
            fileId: req.file.id,
        })
        const files = req.file;
        const image = await data.save();
        res.status(200).json({
            success: true,
            image,
            files
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};


module.exports.getImagesById = async (req, res) => {
    try {

        const images = await Image.find({ _id: { $in: req.body.id } }).populate({ path: 'userId', select: 'username' });
        const Ids = images.map(img => img.fileId);

        gfs.find({ _id: { $in: Ids } }).toArray((err, files) => {
            if (!files || files.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: 'No files available'
                });
            }
            files.map(file => {
                if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/svg') {
                    file.isImage = true;
                } else {
                    file.isImage = false;
                }
            });
            // render image to browser
            //gfs.openDownloadStreamByName(req.params.filename).pipe(res);
            res.status(200).json({
                success: true,
                images,
                files
            });
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};


module.exports.DeleteImage = async (req, res) => {
    try {

        const images = await Image.findByIdAndDelete({ _id: req.body.id });
        const id = images.fileId;
        gfs.delete(new mongoose.Types.ObjectId(id), (err, data) => {
            if (err) {
                return res.status(404).json({ err: err });
            }
            res.status(200).json({
                success: true,
                deleted: true,
                images,
                message: `File with ID ${id} is deleted`,
            });
        });

    } catch (error) {
        console.log(error)
        res.status(400).json({ error });

    }
}
