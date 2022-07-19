const mongoose = require('mongoose');
const Activity = require('../models/activity.model')
const bd = require('../models/biodata.model');

module.exports.posts = async (req, res) => {
    try {
        let data = new Activity({
            title: req.body.title,
            category: req.body.category,
            body: req.body.body,
            price: req.body.price,
            role: req.body.role,
            company: req.body.company,
            currency: req.body.currency,
            Provider: req.userId,
        });
        const result = await data.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.addbidder = async (req, res) => {
    try {
        const find = await Activity.findById({ _id: req.params.id })
        const arr = find.bidders;
        
        if(!arr.includes(req.body.id)){
            const user = await Activity.findOneAndUpdate({ _id: req.params.id },
                {
                    $push: {
                        bidders: req.body.id
                    }
                }, { new: true });
    
            if (user) {
                res.status(200).json({ user });
            } else {
                res.status(400).send("couldn't update data, please try again");
            }
        }else{
            res.status(400).json({
                data: `${req.body.id} has already applied`
            })
        }
        
    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.getposts = async (req, res) => {
    try {
        const data = await Activity.find()
            .select('_id title category price currency company Provider')
            .populate({ path: 'Provider', select: 'username' })
            .sort({ "createdAt": 1 })
        res.status(200).json(data);
        // { title: { $regex: req.params.title, $options: 'xsi' } }
    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
}

module.exports.getpostById = async (req, res) => {
    try {
        const data = await Activity.findById({ _id: req.params.id })
        .populate("Selected bidders")
        .populate({path:'Provider' , select:'username'})
        res.status(200).json(data);

    } catch (error) {
        console.log(error)
        res.status(400).send(error);

    }
}

module.exports.Updatepost = async (req, res) => {
    try {
        const title = req.body.title;
        const category = req.body.category;
        const body = req.body.body;
        const price = req.body.price;
        const currency = req.body.currency;
        const updatedAt = Date.now();

        const post = await Activity.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                title: title,
                category: category,
                body: body,
                price: price,
                currency: currency,
                createdAt: updatedAt
            }
        }, { new: true });
        res.status(200).json({
            success: true,
            post
        });

    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.SelectBidder = async (req, res) => {
    try {
        const data = await Activity.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {
                    Selected: req.body.id
                }
            }, { new: true });

        if (data) {
            res.status(200).json({ data })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
}

module.exports.ConfirmBidder = async (req, res) => {
    try {
        const data = await Activity.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {
                    confirm: "yes"
                }
            }, { new: true });

        if (data) {
            res.status(200).json({ data })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
}

module.exports.updatepaystatus = async (req, res) => {
    try {
        const data = await Activity.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {
                    Paystatus: "paid"
                }
            }, { new: true });
        if (data) {
            res.status(200).json({ data })
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
}

module.exports.removebidder = async (req, res) => {
    try {
        const id = req.body.id;
        const user = await Activity.findOneAndUpdate({ _id: req.params.id },
            {
                $pull: {
                    bidders: id
                }
            }, { new: true });

        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(400).send("couldn't update data, please try again");
        }
    } catch (error) {
        res.status(400).send(`Error when trying upload image: ${error}`);
    }
};

module.exports.DeletePost = async (req, res) => {
    try {

        const post = await Activity.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            success: true,
            post
        });

    } catch (error) {
        return res.status(400).json({ error });

    }
}
