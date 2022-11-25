"use strict";

const business = [];
const users = [];

function getBusiness(){
    return business;
}

function createBusiness(newBusiness){
    business.push(Business.createFromObject(newBusiness));
}

function editBusiness(businessId, newBusiness){
    for(let i=0;i<business.length;i++){
        if(business[i]._businessID === businessId){
            business[i] = Business.createFromObject(newBusiness);
            break;
        }
    }
}

function deleteBusiness(businessId){
    for(let i=0;i<business.length;i++){
        if(business[i]._businessID === businessId){
            business.splice(i, 1);
        }
    }
}

function getBusinessByID(businessId){
    for(let i=0;i<business.length;i++){
        if(business[i]._businessID === businessId){
            return business[i];
        }
    }
}

function createUser(newUser){
    users.push(User.createFromObject(newUser));
}