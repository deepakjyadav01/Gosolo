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
        type:Number
    },
    currency:{
        type:String,
    },
    Paystatus:{
        type:String,
        uppercase:true,
        enum:['paid','unpaid'],
        default:'UNPAID'
    },
    company:{
        type:String
    },
    Provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bidders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: 0
    }],
    Selected:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    confirm:{
        type:String,
        uppercase:true,
        enum:['yes','no'],
        default:'no'
    },
    createdAt: {
        default: Date.now(),
        type: Date,
    },
})



const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;