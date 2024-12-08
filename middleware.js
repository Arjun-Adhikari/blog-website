const blog = require('./models/blogtemp.js');
const passport = require('passport');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/user/login');
    }
    next();
};

// For authentication
module.exports.Authenticate = passport.authenticate('local', { 
    successRedirect: '/posts?loggedin=yes',
    failureRedirect: '/login',
});

// Middleware to make data accessible to multiple routes
module.exports.fetchBlogs = async (req, res, next) => {
    try {
        const blogs = await blog.find({});
        req.blogs = blogs; // Attach blogs to req object 
        next(); // Proceed to the next middleware or route handler 
    } catch (error) {
        console.error("Error fetching blogs:", error);
        next(error); // Pass the error to the error-handling middleware 
    }
};
