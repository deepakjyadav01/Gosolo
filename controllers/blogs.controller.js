const Blog = require('../models/Blogs.model')
const Comment = require('../models/comments.model');

module.exports.Createblog = async (req, res) => {
    try {
        let data = new Blog({
            title: req.body.title,
            user: req.body.user,
            body: req.body.body,
            category: req.body.category,
            images: [req.body.images],
        });
        const result = await data.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.addcomment = async (req, res) => {
    try {
        let data = new Comment({
            user: req.body.user,
            blog: req.body.blog,
            body: req.body.body
        });
        const comment = await data.save();
        const id = comment._id;
        const result = await Blog.findOneAndUpdate({ _id: id },
            {
                $push: {
                    comments: id
                }
            }, { new: true })
        if (result && comment) {
            res.status(200).json({
                success: true,
                comment, result
            });
        }
    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.getblogs = async (req, res) => {
    try {
        const data = await Blog.find({ title: { $regex: `/^${req.params.title}.*/`, options: `xsi` } })
            .select('_id title category user')
            .populate({ path: 'user', select: 'username' })
            .sort({ "createdAt": -1 })
        res.status(200).json(data);

    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
}
module.exports.getblogById = async (req, res) => {
    try {
        const data = await Blog.findById({ _id: req.params.id })
            .populate({ path: 'user', select: 'username' }, { path: 'comments', limit: 20, sort: { "createdAt": -1 } });
        res.status(200).json(data);

    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
}

module.exports.Updateblog = async (req, res) => {
    try {
        const title = req.body.title;
        const user = req.body.user;
        const body = req.body.body;
        const category = req.body.category;
        const images = [req.body.images];
        const updatedAt = Date.now();

        const data = await Blog.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                title: title,
                user: user,
                body: body,
                category: category,
                images: images,
                createdAt: updatedAt
            }
        }, { new: true });

        if (data) {
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.DeleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            success: true,
            blog
        });
    } catch (error) {
        return res.status(400).json({ error });
    }
}
