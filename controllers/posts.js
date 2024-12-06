
const blog = require('../models/blogtemp.js');

module.exports.postsaveblog = async (req, res, next) => {
    try {
        let { heading, body } = req.body;
        let blogdata = new blog({ heading, body });
        await blogdata.save();
        console.log("Blog saved:", blogdata);
        res.redirect('/posts');
    } catch (error) {
        console.error("Error saving blog:", error);
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.getrenderblog = (req, res) => {
    res.render('postnew.ejs');
};

module.exports.getfindblog = (req, res) => {
    const blogs = req.blogs; // Access blogs from req object 
    console.log("blogs");
    res.render('posts.ejs', { blogs });
};

module.exports.getfindbyidblog = async (req, res, next) => {
    try {
        let { id } = req.params;
        let editblog = await blog.findById(id);
        res.render('postedit.ejs', { editblog });
    } catch (error) {
        console.error("Error finding blog by ID:", error);
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.postupdateblog = async (req, res, next) => {
    try {
        let { id } = req.params;
        let { heading: newHeading, body: newBody } = req.body;
        let updatedBlog = await blog.findByIdAndUpdate(id, { heading: newHeading, body: newBody }, { runValidators: true, new: true });
        res.redirect('/posts');
    } catch (error) {
        console.error("Error updating blog:", error);
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.deleteblog = async (req, res, next) => {
    try {
        let { id } = req.params;
        await blog.findByIdAndDelete(id);
        res.redirect('/posts');
    } catch (error) {
        console.error("Error deleting blog:", error);
        next(error); // Pass the error to the error-handling middleware
    }
};

module.exports.onlyname = (req, res) => {
    const blogs = req.blogs; // Access blogs from req object 
    console.log("blogs");
    res.render('onlyname.ejs', { blogs });
};

module.exports.homeroute = (req, res) => {
    res.send("home");
};
