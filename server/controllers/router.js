"use strict";

const router = require('express').Router();
const dataHandlerBusiness = require('./data_handler_business');
const dataHandlerUsers = require('./data_handler_users');
const dataHandlerReviews = require('./data_handler_reviews');
const tokenUtils = require('./token_utils');

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

router.route('/BusinessReviews/id/:_id')
    .get((req, res) => dataHandlerBusiness.getReviewsRelatedToABusinessByID(req, res));
////////////////////////////////////
router.route('/Users')
    .get((req, res) => dataHandlerUsers.getUsers(req, res))
    .post((req, res) => dataHandlerUsers.createUser(req, res));

router.use('/Users/email/:email', tokenUtils.verifyToken);

router.route('/Users/email/:email')
    .get((req, res) => dataHandlerUsers.getUserByEmail(req, res))
    .put((req, res) => dataHandlerUsers.updateUserByEmail(req, res))
    .delete((req, res) => dataHandlerUsers.deleteUserByEmail(req, res));

router.route('/Users/name/:name')
    .get((req, res) => dataHandlerUsers.getUserByName(req, res))
    .put((req, res) => dataHandlerUsers.updateUserByName(req, res))
    .delete((req, res) => dataHandlerUsers.deleteUserByName(req, res));

router.route('/Users/id/:_id')
    .get((req, res) => dataHandlerUsers.getUserByID(req, res))
    .put((req, res) => dataHandlerUsers.updateUserByID(req, res))
    .delete((req, res) => dataHandlerUsers.deleteUserByID(req, res));
///////////////////////////////////
router.route('/Reviews')
    .get((req, res) => dataHandlerReviews.getReviews(req, res))
    .post((req, res) => dataHandlerReviews.createReviews(req, res));

router.route('/Reviews/id/:_id')
    .get((req, res) => dataHandlerReviews.getReviewByID(req, res))
    .put((req, res) => dataHandlerReviews.updateReviewsByID(req, res))
    .delete((req, res) => dataHandlerReviews.deleteReviewByID(req, res));

router.route('/Reviews/target/:targetBusinessID')
    .get((req, res) => dataHandlerReviews.getReviewByTarget(req, res))
    .put((req, res) => dataHandlerReviews.updateReviewsByTargetID(req, res))
    .delete((req, res) => dataHandlerReviews.deleteReviewByTarget(req, res));
/////////////////////////////////////

module.exports = router;