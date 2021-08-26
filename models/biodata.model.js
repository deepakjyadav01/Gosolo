const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const qualificationSchema = new Schema({
    types: {
        type: String
    },
    marks: {
        type: Number
    },
    Institute: {
        type: String
    },
    year: {
        type: String
    }
});

const jobSchema = new Schema({
    company: {
        type: String
    },
    duration: {
        type: String
    },
    position: {
        type: String
    }
});

const worksampleSchema = new Schema({
    name: {
        type: String
    },
    link: {
        type: String,
        maxlength: 40
    }
});

const qualification = mongoose.model('qualification', qualificationSchema);
const job = mongoose.model('job', jobSchema);
const worksample = mongoose.model('worksample', worksampleSchema);

module.exports = { qualification, job, worksample };