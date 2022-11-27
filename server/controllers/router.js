"use strict";

const router = require('express').Router();
const dataHandlerBusiness = require('./data_handler_business');
const dataHandlerUsers = require('./data_handler_users');

router.route('/Business')
    .get((req, res) => dataHandlerBusiness.getBusiness(req, res))
    .post((req, res) => dataHandlerBusiness.createBusiness(req, res));

router.route('/Business/name/:name')
    .get((req, res) => dataHandlerBusiness.getBusinessByName(req, res))
    .put((req, res) => dataHandlerBusiness.updateBusinessByName(req, res))
    .delete((req, res) => dataHandlerBusiness.deleteBusinessByName(req, res));

router.route('/Business/id/:_id')
    .get((req, res) => dataHandlerBusiness.getBusinessByID(req, res))
    .put((req, res) => dataHandlerBusiness.updateBusinessByID(req, res))
    .delete((req, res) => dataHandlerBusiness.deleteBusinessByID(req, res));
////////////////////////////////////
router.route('/Users')
    .get((req, res) => dataHandlerUsers.getUsers(req, res))
    .post((req, res) => dataHandlerUsers.createUser(req, res));

router.route('/Users/name/:name')
    .get((req, res) => dataHandlerUsers.getUserByName(req, res))
    .put((req, res) => dataHandlerUsers.updateUserByName(req, res))
    .delete((req, res) => dataHandlerUsers.deleteUserByName(req, res));

router.route('/Users/id/:_id')
    .get((req, res) => dataHandlerUsers.getUserByID(req, res))
    .put((req, res) => dataHandlerUsers.updateUserByID(req, res))
    .delete((req, res) => dataHandlerUsers.deleteUserByID(req, res));

module.exports = router;