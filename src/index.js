"use strict";

let businessTest = {
    "name": "Pizza-Hut",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "commentAndAnswer":["",""]
};

let businessTest2 = {
    "name": "Dommino's pizza",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "commentAndAnswer":["",""]
};

let businessTest3 = {
    "name": "Pizza y come",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "commentAndAnswer":["",""]
};

let businessTest4 = {
    "name": "Benedettis",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "commentAndAnswer":["",""]
};

let businessTest5 = {
    "name": "Benedettis",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "commentAndAnswer":["",""]
};

createBusiness(businessTest);
createBusiness(businessTest2);
createBusiness(businessTest3);
createBusiness(businessTest4);
console.table(business);

editBusiness(business[0]._businessID, businessTest5);
console.table(business);

deleteBusiness(business[0]._businessID);
console.table(business);

deleteBusiness(business[2]._businessID);
console.table(business);

let gottenBusiness = getBusinessByID(business[0]._businessID);
console.table(gottenBusiness);


let user1 = {
    "name":"Omar Chavira",
    "email":"ochavirar@outlook.com",
    "password":"MyPassword123",
    "subscribedTo":["id1", "id2", "id3"], 
    "qualifiedBusiness":["id1", 10], 
    "level": 10,
};

createUser(user1);
console.table(users);