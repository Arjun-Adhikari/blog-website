const login = require("../models/login.js");

module.exports.getsignup = (req, res) => {
    res.render('signup.ejs');
}

module.exports.postsignup = async (req, res) => {
    let { username, email, password } = req.body;
    const newuser = await new login({ username, email });
    const registeredUser = await login.register(newuser, password);
    console.log(registeredUser);
    res.redirect('/user/login');
}

module.exports.getlogin = (req, res) => {
    res.render('login.ejs');
}

module.exports.postlogin = (req, res) => {
    res.redirect('/listing');
}
