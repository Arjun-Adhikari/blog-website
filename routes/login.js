const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.js');
const { Authenticate } = require('../middleware.js');
const wrapAsync = require('../utils/wrapAsync.js');

// Signup routes
router.get('/user/signup', wrapAsync(loginController.getsignup));
router.post('/user/signup', wrapAsync(loginController.postsignup));

// Login routes
router.get('/user/login', wrapAsync(loginController.getlogin));
router.post('/user/login', Authenticate, wrapAsync(loginController.postlogin));//imp

module.exports = router;
