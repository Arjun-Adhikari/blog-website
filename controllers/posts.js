const blog = require('../models/blogtemp.js');

module.exports.postsaveblog = async (req, res) => {
    let { heading, body } = req.body;
    let blogdata = new blog({
        heading: heading,
        body: body,
    });
    await blogdata.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
    res.redirect('/posts');
}

module.exports.getrenderblog = (req, res) => {
    res.render('postnew.ejs');
}

module.exports.getfindblog = async (req, res) => {
    let blogs = await blog.find({});
    console.log("blogs ");
    res.render('posts.ejs', { blogs });
}

module.exports.getfindbyidblog = async (req, res) => {
    let { id } = req.params;
    let editblog = await blog.findById(id);
    res.render('postedit.ejs', { editblog });
}

module.exports.postupdateblog = async (req, res) => {
    let { id } = req.params;
    let { heading: newHeading, body: newBody } = req.body;
    let updatedBlog = await blog.findByIdAndUpdate(id, { heading: newHeading, body: newBody }, { runValidators: true, new: true });
    res.redirect('/posts');
}

module.exports.deleteblog = async (req, res) => {
    let { id } = req.params;
    await blog.findByIdAndDelete(id);
    res.redirect('/posts');
}