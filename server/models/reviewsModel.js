"use strict";

const mongoose3 = require('mongoose');

let mongoDB3 = 'mongodb://0.0.0.0:27017/YelpDB';
mongoose3.connect(mongoDB3, {useNewUrlParser: true});

let reviewSchema = mongoose3.Schema({
    targetBusinessID: {
        type: String,
        required: true
    },
    userWhoReviewedID: {
        type: String,
        required: true
    },
    userWhoReviewedName: {
        type: String,
        required: true
    },
    reviewerMessage: {
        type:String,
        required: true
    },
    "businessResponse":{
        type: String,
        required: true
    },
    reviewScore: {
        type: Number,
        min: 1, 
        max: 5
    }
});

let Review = mongoose3.model('review', reviewSchema);

module.exports = Review;