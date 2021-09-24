const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user.model');

const ActivitySchema = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    body: {
        type: String
    },
    price:{
        type:String
    },
    currency:{
        type:String,
    },
    Paystatus:{
        type:String,
        lowercase:true,
        enum:['paid','unpaid'],
        default:'unpaid'
    },
    company:{
        type:String,
        default: null
    },
    Provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bidders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    }],
    Selected:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default:null
    },
    confirm:{
        type:String,
        lowercase:true,
        enum:['yes','no'],
        default:'no'
    },
    role: {
        type: String
    },
    createdAt: {
        default: Date.now(),
        type: Date,
    },
})



const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;