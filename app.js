const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require("./models/user.js");
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const blog = require('./models/blogtemp.js');
const session = require('express-session');
const passport = require('passport');

const localStrategy = require('passport-local');
const login = require('./models/login.js');

const app = express();

//session
const sessionProperty = {
    secret: 'kxababukbr',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
};
app.use(session(sessionProperty));
//session setup

//routes
const listing = require('./routes/listing.js');
const posts = require('./routes/posts.js');
const user = require('./routes/login.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
//this is of routes
app.use('/', listing);
app.use('/', posts);
app.use('/', user);//this is the login.js routes.

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//initialize passport and use session


app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(login.authenticate()));
passport.serializeUser(login.serializeUser());
passport.deserializeUser(login.deserializeUser());

main()
    .then(() => {
        console.log("mongoose is starting");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
}

//implemmeting the listing schema
let newlisting = new Listing({
    subject: "personal gain",
    date: 201,
    title: "how to make blogs",
    description: "making blogs is so easy",
});
newlisting.save();

//implemmeting the blog schema
let newblog = new blog({
    heading: "heading of the blog",
    body: "description of the blog",
});
newblog.save();

app.listen(3000, () => {
    console.log("port is listening on 3000");
});