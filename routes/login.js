
const express = require('express');
const router = express.Router();
const passport = require("passport");

const loginController = require('../controllers/login.js');
//getsignup
router.get('/user/signup', loginController.getsignup);

//postsignup
router.post('/user/signup', loginController.postsignup);

//getlogin
router.get('/user/login', loginController.getlogin);

//postlogin
router.post('/user/login', passport.authenticate('local', { failureRedirect: '/login' }), loginController.postlogin);

module.exports = router;