"use strict";

const business = [];

function getBusiness(){
    return business;
}

function createBusiness(newBusiness){
    console.log("paso1");
    business.push(Business.createFromObject(newBusiness));
}