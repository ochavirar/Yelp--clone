"use strict";

const mongoose = require('mongoose');

let mongoDB = 'mongodb://0.0.0.0:27017/YelpDB';
mongoose.connect(mongoDB, {useNewUrlParser: true});

let businessSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    googleMapsLink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture1: {
        type: String,
        required: true
    },
    picture2: {
        type: String,
        required: true
    },
    picture3: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    },
    openHour: {
        type: Number,
        min: 0,
        max: 23,
        required: true
    },
    closingHour: {
        type: Number,
        min: 0,
        max: 23,
        required: true
    }
});

let Business = mongoose.model('business', businessSchema);

module.exports = Business;
