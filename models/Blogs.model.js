const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user.model');
const Comment = require('../models/comments.model');

const BlogSchema = new Schema({
    title: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    body: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogbody",
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default:null
    }],
    category: {
        type: String
    },
    images:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image"
    }],
    createdAt: {
        default: Date.now(),
        type: Date,
    },
})

const BlogbodySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    body: {
        type: String
    },
    createdAt: {
        default: Date.now(),
        type: Date,
    },
})


const Blog = mongoose.model("Blog", BlogSchema);
const Blogbody = mongoose.model("Blogbody", BlogbodySchema);


module.exports = {Blog,Blogbody};