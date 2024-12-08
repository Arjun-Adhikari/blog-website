const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.js');
const { isLoggedIn, fetchBlogs } = require('../middleware.js');
const wrapAsync = require('../utils/wrapAsync.js');

// Save blog
router.post('/posts/new', wrapAsync(postsController.postsaveblog));

// Render new blog form
router.get('/posts/new', wrapAsync(postsController.getrenderblog));

// Get and render blogs//imp
router.get('/posts', fetchBlogs, wrapAsync(postsController.getfindblog));

// Edit blog by ID
router.get('/posts/:id/edit', wrapAsync(postsController.getfindbyidblog));

// Update blog by ID
router.post('/posts/:id', wrapAsync(postsController.postupdateblog));

// Delete blog by ID
router.delete('/posts/:id', wrapAsync(postsController.deleteblog));

// Render blogs with only names
router.get('/posts/onlyname', fetchBlogs, wrapAsync(postsController.onlyname));

// Home route
router.get('/', wrapAsync(postsController.homeroute));

module.exports = router;
