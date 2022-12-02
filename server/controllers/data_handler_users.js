"use strict"
const User = require('../models/modelUsers');
const Review = require('../models/reviewsModel');

function getUsers(req, res){
    User.find({}).then(users => res.status(200).json(users));
}

function getUserByName(req, res){
    let name = req.params.name;
    User.findOne({name:`${name}`}).then(users => res.status(200).json(users));
}

function getUserByEmail(req, res){
    let email = req.params.email;
    User.findOne({email:`${email}`}).then(users => res.status(200).json(users));
}

function getUserByID(req, res){
    let id = req.params._id;
    User.findOne({_id:`${id}`}).then(users => res.status(200).json(users));
}

function createUser(req, res){
    let user = User(req.body);
    
    user.save().then((users) => {
        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.send(`User ${users.name} was created!`);
    });
}

function updateUserByID(req, res){
    let id = req.params._id;
    let updatedUser = req.body;

    for(let property in updatedUser){
        if(['name', 
        'email', 
        'password', 
        'qualificationsData', 
        'level'].includes(property)) continue;
        delete updatedUser[property];
    }

    User.findOneAndUpdate({_id:`${id}`}, updatedUser, {new: true})
        .then(users => {
            res.type('text/plain; charset=utf-8');
            res.send(`User ${users.name} was updated!`);
        });
}

function updateUserByName(req, res){
    let name = req.params.name;
    let updatedUser = req.body;

    for(let property in updatedUser){
        if(['name', 
        'email', 
        'password', 
        'qualificationsData', 
        'level'].includes(property)) continue;
        delete updatedUser[property];
    }

    User.findOneAndUpdate({name:`${name}`}, updatedUser, {new: true})
        .then(users => {
            res.type('text/plain; charset=utf-8');
            res.send(`User ${users.name} was updated!`);
        });
}

function updateUserByEmail(req, res){
    let email = req.params.email;
    let updatedUser = req.body;

    for(let property in updatedUser){
        if(['name', 
        'email', 
        'password', 
        'qualificationsData', 
        'level'].includes(property)) continue;
        delete updatedUser[property];
    }

    User.findOneAndUpdate({email:`${email}`}, updatedUser, {new: true})
        .then(users => {
            res.type('text/plain; charset=utf-8');
            res.send(`User ${users.name} was updated!`);
        });
}

function deleteUserByName(req, res) {
    let name = req.params.name;

    User.findOneAndDelete({name:`${name}`}).then(users => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${users.name} was deleted!`);
    });
}

function deleteUserByID(req, res) {
    let id = req.params._id;

    User.findOneAndDelete({_id:`${id}`}).then(users => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${users.id} was deleted!`);
    });
}

function deleteUserByEmail(req, res) {
    let email = req.params.email;

    User.findOneAndDelete({email:`${email}`}).then(users => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${users.email} was deleted!`);
    });
}

function postNewReview(req, res){
    let review = Review(req.body);

    review.save().then((rev) => {
        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.send(`Review to ${rev.targetBusinessID} was created!`);
    });
}

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUserByName = getUserByName;
exports.getUserByID = getUserByID;
exports.getUserByEmail = getUserByEmail;
exports.updateUserByID = updateUserByID;
exports.updateUserByName = updateUserByName;
exports.deleteUserByName = deleteUserByName;
exports.deleteUserByID = deleteUserByID;
exports.updateUserByEmail = updateUserByEmail;
exports.deleteUserByEmail = deleteUserByEmail;
exports.postNewReview = postNewReview;