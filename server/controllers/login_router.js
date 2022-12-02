"use strict";

const router = require('express').Router();
const dataHandlerLogin = require('./data_handler_login');

router.route('/login')
    .post((req, res) => dataHandlerLogin.login(req, res));

module.exports = router;