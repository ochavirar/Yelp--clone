"use strict";

const { createBusiness } = require("./server/controllers/data_handler");

let businessTest = {
    "name": "Pizza-Hut",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "openHour": 10,
    "closingHour": 21
};

createBusiness(businessTest);
