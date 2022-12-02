"use strict";

const User = require('../models/modelUsers');

function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    
    User.findOne({email: `${email}`})
        .then(users => {
            let token = users.generateToken(password);
            console.log(token);
            let newUPdatedUser = users;
            User.findOneAndUpdate({email: `${email}`}, newUPdatedUser).then(us =>{
                console.log(us); 
            });
            if(token !== undefined){
                res.status(200);
                res.set('text/plain');
                res.send(token);
            } else {
                res.status(403);
                res.set('text/plain');
                res.send("Wrong email or password");
            }
        })
        .catch(err => {
            res.status(403);
                res.set('text/plain');
                res.send("Wrong email or password");
        });
}
 

exports.login = login;