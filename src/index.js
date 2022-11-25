"use strict";

let businessTest = {
    "name": "Pizza-Hut",
    "googleMapsLink":"goo.gl/jdjd",
    "description": "Las mejores pizzas de la ciudad y del mundo!",
    "picture1":"pic1.png", 
    "picture2":"pic2.png", 
    "picture3":"pic3.png",
    "budget":"High",
    "openHour":7,
    "closingHour":20,
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
    "openHour":7,
    "closingHour":20,
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
    "openHour":7,
    "closingHour":20,
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
    "openHour":7,
    "closingHour":20,
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
    "openHour":7,
    "closingHour":20,
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
    "subscribedTo":[["id1", 5],["id2", 4], ["id3", 2]], 
    "qualifiedBusiness":["id1", 5], 
    "level": 10,
};

let user2 = {
    "name":"Hector Chavira",
    "email":"hchaviraf@outlook.com",
    "password":"MyPassword123",
    "subscribedTo":["id1", "id2", "id3"], 
    "qualifiedBusiness":["id1", 5], 
    "level": 10,
};


let user3 = {
    "name":"Perla Chavira",
    "email":"pchaviraf@outlook.com",
    "password":"MyPassword123",
    "subscribedTo":["id1", "id2", "id3"], 
    "qualifiedBusiness":[["id1", 5],["id2", 4], ["id3", 2]], 
    "level": 10,
};

let user4 = {
    "name":"Fernanda Chavira",
    "email":"fchaviraf@outlook.com",
    "password":"MyPassword123",
    "subscribedTo":["id1", "id2", "id3"], 
    "qualifiedBusiness":["id1", 5], 
    "level": 10,
};

let user5 = {
    "name":"Mariela Chavira",
    "email":"mchavirar@outlook.com",
    "password":"MyPassword123",
    "subscribedTo":["id1", "id2", "id3"], 
    "qualifiedBusiness":["id1", 5], 
    "level": 10,
};

createUser(user1);
createUser(user2);
createUser(user3);
createUser(user4);
console.table(users);

editUser(users[1]._userID, user5);
console.table(users);

deleteUser(users[3]._userID);
deleteUser(users[1]._userID);
console.table(users);

let gottenUser = getUserByID(users[0]._userID);
console.log(gottenUser);


