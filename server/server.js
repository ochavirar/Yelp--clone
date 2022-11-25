"use strict";

const express = require('express');
const router = require('../server/controllers/router.js');
const app = express();

const port = 4000;

app.use(express.json());

app.get('/',
    (req, res) => res.send("Hello Yelp! clone people")
);

app.route('/home').get(
    (req, res) => res.send("Hello from the home page!")
);

app.listen(port, () =>{
    console.log(`Example app listening to port ${port}`);
});