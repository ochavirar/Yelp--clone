"use strict";

const mongoose = require('mongoose');
const { returnCryptedPassword } = require('../controllers/mongodbPassword');

let pass = returnCryptedPassword();

let mongoDB = `mongodb+srv://OGDEVS:${pass}@cluster0.gh4dk1b.mongodb.net/YelpDB`;
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
    ownerID: {
        type: String,
        required: true
    },
    fiveStars:{
        type: Number,
        required: true
    },
    fourStars:{
        type: Number,
        required: true
    },
    threeStars:{
        type: Number,
        required: true
    },
    twoStars:{
        type: Number,
        required: true
    },
    oneStar:{
        type: Number,
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
