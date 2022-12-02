"use strict";

const mongoose2 = require('mongoose');
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { returnCryptedPassword } = require('../controllers/mongodbPassword');
let privateKey = process.env.TOKEN_KEY;

let pass = returnCryptedPassword();

let mongoDB2 = `mongodb+srv://OGDEVS:${pass}@cluster0.gh4dk1b.mongodb.net/YelpDB`;
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
    token: String,
    qualificationsData: [ //Stores key-value pairs within an array 
        {type: String}, //ID of the reviewd business 
        {type:Number, min: 1, max: 5}, //Note for the business
    ],
    ownedBusinessesIDs: [
        {type: String}
    ],
    level: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: String
    },
    userType: {
        type: String,
        required: true,
        enum: ['user', 'manager', 'admin']
    }
});

usersSchema.pre('save', function(next) {
    let user = this;
    user.password = bcrypt.hashSync(user.password, 10);
    next();
});


usersSchema.methods.generateToken = function(password) {
    let user = this;
    let payload = {_id: user._id, role: user.userType};
    let options = { expiresIn: 60 * 60 };

    if(bcrypt.compareSync(password, user.password)){
       try{
            user.token = jwt.sign(payload, privateKey, options);
            return user.token;
        }catch(err){
            console.log(err);
        } 
    }
}


let User = mongoose2.model('users', usersSchema);

module.exports = User;
 