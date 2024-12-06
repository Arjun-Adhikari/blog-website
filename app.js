const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const localStrategy = require('passport-local').Strategy;
const loginSchema = require('./models/login.js');

// Routes
const posts = require('./routes/posts.js');
const user = require('./routes/login.js');

// Setting paths
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejsMate);
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// Session setup
const sessionProperty = {
    secret: 'kxababukbr',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
};
app.use(session(sessionProperty));

// Initialize passport and use session
app.use(passport.initialize());
app.use(passport.session());

// Local authentication
passport.use(new localStrategy(loginSchema.authenticate()));
passport.serializeUser(loginSchema.serializeUser());
passport.deserializeUser(loginSchema.deserializeUser());

// Use routes
app.use('/', posts);
app.use('/', user);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
    console.log("Mongoose is starting");
}
main().catch(err => console.log(err));

// Listening port
app.listen(3000, () => {
    console.log("Port is listening on 3000");
});
