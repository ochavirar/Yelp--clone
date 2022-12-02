"use strict";

process.env.TOKEN_KEY = "ABC123"

const express = require('express');
const router = require('./controllers/router');
const loginRouter = require('./controllers/login_router');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors({
    origin: ['http://127.0.0.1:5500']
  }));

app.use(express.json());
app.use(loginRouter);
app.use('/api', router);
app.get('/',
    (req, res) => res.send("Hello Yelp! clone people")
);

app.route('/home').get(
    (req, res) => res.send("Hello from the home page!")
);

app.listen(port, () =>{
    console.log(`Example app listening to port ${port}!`);
});