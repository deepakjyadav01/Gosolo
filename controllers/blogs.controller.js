const b = require('../models/Blogs.model')
const Comment = require('../models/comments.model');

module.exports.Createblog = async (req, res) => {
    try {
        let data = new b.Blog({
            title: req.body.title,
            user: req.userId,
            body: req.body.body,
            category: req.body.category,
            images: req.body.images
        });
        const result = await data.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(`Error when trying: ${error}`);
    }
}
module.exports.addbody = async (req, res) => {
    try {
        const body = JSON.stringify(req.body);
        let data = new b.Blogbody({
            user: req.userId,
            body: body
        })
        const result = await data.save();

        if (result) {
            res.json({ result })
        }
    } catch (error) {
        res.status(400).send(`Error when trying: ${error}`);
    }
}

module.exports.addcomment = async (req, res) => {
    try {
        const bod = req.body.body
        const string = JSON.stringify(bod);

        let data = new Comment({
            user: req.userId,
            blog: req.body.blog,
            body: string
        });
        console.log(data)
        const comment = await data.save();
        const id = comment._id;
        const result = await b.Blog.findOneAndUpdate({ _id: req.body.blog },
            {
                $push: {
                    comments: id
                }
            }, { new: true })

        res.status(200).json({
            success: true,
            comment, result
        });

    } catch (error) {
        res.status(400).send(`Error when trying: ${error}`);
    }
};

module.exports.getblogs = async (req, res) => {
    try {
        const data = await b.Blog.find({ title: { $regex: req.params.title , $options: 'xsi'} })
            .select('_id title category user createdAt')
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
        const data = await b.Blog.findById({ _id: req.params.id })
            .populate("images body user comments")
        res.status(200).json(data);

    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
}

module.exports.Updateblog = async (req, res) => {
    try {
        const title = req.body.title;
        const body = req.body.body;
        const category = req.body.category;
        const images = req.body.images;
        const updatedAt = Date.now();

        const data = await b.Blog.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                title: title,
                category: category,
                body: body,
                images: images,
                createdAt: updatedAt
            }
        }, { new: true });

        if (data) {
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(400).send(`Error when trying: ${error}`);
    }
};

module.exports.Updateblogbody = async (req, res) => {
    try {
        const body = JSON.stringify(req.body);
        const updatedAt = Date.now();

        const data = await b.Blogbody.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                body: body,
                createdAt: updatedAt
            }
        }, { new: true });

        if (data) {
            res.status(200).json({ data });
        }
    } catch (error) {
        res.status(400).send(`Error when trying: ${error}`);
    }
};

module.exports.DeleteBlog = async (req, res) => {
    try {
        const blog = await b.Blog.findByIdAndDelete({ _id: req.params.id })
        const blogbody =  await b.Blogbody.findByIdAndDelete({_id:blog.body});
        
        if(blog && blogbody){
            res.status(200).json({blog,blogbody});
        }        
    } catch (error) {
        return res.status(400).json({ error });
    }
}
