const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.js');
//postsaveblog
router.post('/posts/new', postsController.postsaveblog);

//getrenderblog
router.get('/posts/new', postsController.getrenderblog);

//getfindblog
router.get('/posts', postsController.getfindblog);

//getfindbyidblog
router.get('/posts/:id/edit', postsController.getfindbyidblog);

//postupdateblog
router.post('/posts/:id', postsController.postupdateblog);

//deleteblog
router.delete('/posts/:id', postsController.deleteblog);

module.exports = router;