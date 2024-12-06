
const loginSchema = require('../models/login');
const passport = require('passport');

module.exports.getsignup = (req, res) => {
    res.render('signup.ejs');
};

module.exports.postsignup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newuser = new loginSchema({ username, email });
        const registeredUser = await loginSchema.register(newuser, password);
        console.log(registeredUser);
        res.redirect('/user/login');
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.getlogin = (req, res) => {
    res.render('login.ejs');
};

module.exports.postlogin = (req, res) => {
    res.redirect('/posts');
};

module.exports.postlogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
};
