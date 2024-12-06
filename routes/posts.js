const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.js');
const { isLoggedIn, fetchBlogs } = require('../middleware.js');
const wrapAsync = require('../utils/wrapAsync.js');

// Save blog
router.post('/posts/new', isLoggedIn, wrapAsync(postsController.postsaveblog));

// Render new blog form
router.get('/posts/new', isLoggedIn, wrapAsync(postsController.getrenderblog));

// Get and render blogs
router.get('/posts', isLoggedIn, fetchBlogs, wrapAsync(postsController.getfindblog));

// Edit blog by ID
router.get('/posts/:id/edit', isLoggedIn, wrapAsync(postsController.getfindbyidblog));

// Update blog by ID
router.post('/posts/:id', isLoggedIn, wrapAsync(postsController.postupdateblog));

// Delete blog by ID
router.delete('/posts/:id', isLoggedIn, wrapAsync(postsController.deleteblog));

// Render blogs with only names
router.get('/posts/onlyname', isLoggedIn, fetchBlogs, wrapAsync(postsController.onlyname));

// Home route
router.get('/', isLoggedIn, wrapAsync(postsController.homeroute));

module.exports = router;
