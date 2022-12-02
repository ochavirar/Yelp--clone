"use strict";
////////////////////////////
const Review = require('../models/reviewsModel');
///////////////////////////
function getReviews(req, res){
    Review.find({}).then(reviews => res.status(200).json(reviews));
}

function createReviews(req, res){
    let review = Review(req.body);
    
    review.save().then((reviews) => {
        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.send(`review to ${reviews.targetBusinessID} was created!`);
    });
}

function getReviewByTarget(req, res){
    let target = req.params.targetBusinessID;
    Review.findOne({name:`${target}`}).then(reviews => res.status(200).json(reviews));
}

function getReviewByID(req, res){
    let id = req.params._id;
    Review.findOne({_id:`${id}`}).then(reviews => res.status(200).json(reviews));
}

function updateReviewsByID(req, res){
    let id = req.params._id;
    let updatedReview = req.body;

    for(let property in updatedReview){
        if(['targetBusinessID', 
        'userWhoReviewedID', 
        'userWhoReviewedName', 
        'reviewerMessage', 
        'businessResponse', 
        'reviewScore'].includes(property)) continue;
        delete updatedReview[property];
    }

    Review.findOneAndUpdate({_id:`${id}`}, updatedReview, {new: true})
        .then(reviews => {
            res.type('text/plain; charset=utf-8');
            res.send(`Review ${reviews.targetBusinessID} was updated!`);
        });
}

function updateReviewsByTargetID(req, res){
    let target = req.params.targetBusinessID;
    let updatedReview = req.body;

    for(let property in updatedReview){
        if(['targetBusinessID', 
        'userWhoReviewedID', 
        'userWhoReviewedName', 
        'reviewerMessage', 
        'businessResponse', 
        'reviewScore'].includes(property)) continue;
        delete updatedReview[property];
    }

    Review.findOneAndUpdate({targetBusinessID:`${target}`}, updatedReview, {new: true})
        .then(reviews => {
            res.type('text/plain; charset=utf-8');
            res.send(`Review ${reviews.targetBusinessID} was updated!`);
        });
}

function deleteReviewByTarget(req, res) {
    let target = req.params.targetBusinessID;

    Review.findOneAndDelete({targetBusinessID:`${target}`}).then(reviews => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${reviews.targetBusinessID} was deleted!`);
    });
}

function deleteReviewByID(req, res) {
    let id = req.params._id;

    Review.findOneAndDelete({_id:`${id}`}).then(reviews => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${reviews._id} was deleted!`);
    });
}

exports.getReviews = getReviews;
exports.createReviews = createReviews;
exports.getReviewByID = getReviewByID;
exports.getReviewByTarget = getReviewByTarget;
exports.updateReviewsByID = updateReviewsByID;
exports.updateReviewsByTargetID = updateReviewsByTargetID;
exports.deleteReviewByTarget = deleteReviewByTarget;
exports.deleteReviewByID = deleteReviewByID;