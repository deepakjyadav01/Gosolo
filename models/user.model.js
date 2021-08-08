const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const Role = require('./role.model')


const UserSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("email is invalid");
          }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [6,'password should exceed than 6 characters'],
        maxlength:15
        },
    cnfpass: {
        type: String,
        required: true,
        minLength: [6,'password should exceed than 6 characters'],
        maxlength:15
      },
    role: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
     }]
});

//pre
UserSchema.pre("save", async function (next) {

    this.password = await bcrypt.hash(this.password, 10);
    this.cnfpass = undefined;
    next();
});



const User = mongoose.model('User', UserSchema , 'Users');

module.exports = User;


