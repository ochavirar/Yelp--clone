"use strict";

const business = [];

function getBusiness(){
    return business;
}

function createBusiness(newBusiness){
    business.push(Business.createFromObject(newBusiness));
}