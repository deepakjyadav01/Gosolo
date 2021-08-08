//require
require('../routes/router')

//import
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const User = require('../models/user.model');
const Role = require('../models/role.model')

module.exports.register = async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cnfpass;

        const empty = validator.isEmpty(password && cpassword);

        if (password === cpassword && !empty) {
            let data = new User({
                username: req.body.username,
                email: req.body.email,
                password: password,
                cnfpass: cpassword,
                role: [req.body.role],

            })
            if (req.body.role) {
                const eg = await Role.find({ name: { $in: req.body.role } });
                data.role = eg.map(role => role._id);
                const reg = await data.save();
                res.status(201).json(reg);
            }
        }
        else {
            res.status(400).send("passwords not matching");
        }
    } catch (error) {
       
        if(error.errors.username.path === "username"){
            res.status(400).send({ message: `Failed! username is required` });
        }else if (error.errors.email.path === "email"){
            res.status(400).send({ message: `Failed! email is required` });
        }else{
            res.status(400).send(error.errors);
        }        
        // if (error.keyPattern.username === 1) {
        //     res.status(400).send({ message: `Failed! username ${error.keyValue.username} does exist` });
        // } else if (error.keyPattern.email === 1) {
        //     res.status(400).send({ message: `Failed! username ${error.keyValue.email} does exist` });
        // } else {
        //     res.status(400).send(error.errors);
        // }
    }
}

module.exports.login = async (req, res) => {

}