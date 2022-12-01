"use strict";

const Business = require('../models/modelBusiness');
const Reviews = require('../models/reviewsModel');
//////////////////////////////////////////
//Conection to MongoDB to return the full businesses array
function getBusiness(req, res){
    Business.find({}).then(businesses => res.status(200).json(businesses));
} 

function getBusinessByName(req, res){
    let name = req.params.name;
    Business.findOne({name:`${name}`}).then(businesses => res.status(200).json(businesses));
}

function getBusinessByID(req, res){
    let id = req.params._id;
    Business.findOne({_id:`${id}`}).then(business => res.status(200).json(business));
}

//Connection to MongoDB to post a new business
function createBusiness(req, res){
    let business = Business(req.body);
    
    business.save().then((businesses) => {
        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.send(`Business ${businesses.name} was created!`);
    });
}

function updateBusinessByID(req, res){
    let id = req.params._id;
    let updatedBusiness = req.body;

    for(let property in updatedBusiness){
        if(['name', 
        'googleMapsLink', 
        'description', 
        'picture1', 
        'picture2', 
        'picture3', 
        'budget', 
        'openHour', 
        'closingHour'].includes(property)) continue;
        delete updatedBusiness[property];
    }

    Business.findOneAndUpdate({_id:`${id}`}, updatedBusiness, {new: true})
        .then(business => {
            res.type('text/plain; charset=utf-8');
            res.send(`Business ${business.name} was updated!`);
        });
}

function updateBusinessByName(req, res){
    let name = req.params.name;
    let updatedBusiness = req.body;

    for(let property in updatedBusiness){
        if(['name', 
        'googleMapsLink', 
        'description', 
        'picture1', 
        'picture2', 
        'picture3', 
        'budget', 
        'openHour', 
        'closingHour'].includes(property)) continue;
        delete updatedBusiness[property];
    }

    Business.findOneAndUpdate({name:`${name}`}, updatedBusiness, {new: true})
        .then(business => {
            res.type('text/plain; charset=utf-8');
            res.send(`Business ${business.name} was updated!`);
        });
}

function deleteBusinessByName(req, res) {
    let name = req.params.name;

    Business.findOneAndDelete({name:`${name}`}).then(business => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${business.name} was deleted!`);
    });
}

function deleteBusinessByID(req, res) {
    let id = req.params._id;
    
    Business.findOneAndDelete({_id:`${id}`}).then(business => {
        res.type('text/plain; charset=utf-8');
        res.send(`Business ${business.id} was deleted!`);
    });
}

function getReviewsRelatedToABusinessByID(req, res){
    let id = req.params._id;
    let businesses = [];

    Business.find({_id:`${id}`})
        .then(data => {
            data.map((d, k) =>{
                businesses.push(d._id);
            });

            Reviews.find({targetBusinessID: {$in: businesses}})
                .then(data => {
                    res.send(data);
                })
                .catch(error => {
                    console.log(error);
                })
        })
        .catch(error => {
            console.log(error);
        });
}


//////////////////////////
exports.getBusiness = getBusiness;
exports.getBusinessByName = getBusinessByName;
exports.getBusinessByID = getBusinessByID;
exports.createBusiness = createBusiness;
exports.updateBusinessByID = updateBusinessByID;
exports.updateBusinessByName = updateBusinessByName;
exports.deleteBusinessByName = deleteBusinessByName;
exports.deleteBusinessByID = deleteBusinessByID;
exports.getReviewsRelatedToABusinessByID = getReviewsRelatedToABusinessByID;

