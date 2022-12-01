"use strict";

const jwt =  require('jsonwebtoken');
const User = require('./../models/modelUsers');

let privateKey = process.env.TOKEN_KEY;

const verifyToken = (req, res, next) => {
    let token = req.get("x-auth");
    let query = req.params;
    User.findOne(query).then(user => {
        token = user.token;
        console.log(token);
    }).then(us => {
        if (token == undefined) {
            return res.status(403).send("Missing token");
        }
    
        jwt.verify(token, privateKey, (err, decoded) => {
            if (err) return res.status(401).send("Invalid Token");
    
            req.userInfo = decoded;
            return next();
        });
    });     
};

exports.verifyToken = verifyToken;