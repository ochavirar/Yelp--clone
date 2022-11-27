"use strict";

const mongoose2 = require('mongoose');

let mongoDB2 = 'mongodb://0.0.0.0:27017/YelpDB';
mongoose2.connect(mongoDB2, {useNewUrlParser: true});

let usersSchema = mongoose2.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    qualificationsData: [ //Stores key-value pairs within an array 
        {type: String}, //ID of the reviewd business 
        {type:Number, min: 1, max: 5}, //Note for the business
    ],
    level: {
        type: Number,
        required: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['user', 'manager']
    }
});

let User = mongoose2.model('users', usersSchema);

module.exports = User;