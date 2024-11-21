const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listing.js');

//edit post listing ie the update routes
router.put('/listing/:id', listingController.updatelisting);

//get edit listing
router.get('/listing/:id/edit', listingController.editlisting);

//delete listing 
router.delete('/listing/:id', listingController.deletelisting);

//post new listing
router.post('/listing/new', listingController.postnewlisting);

// get showeach id for showeach.ejs
router.get('/listing/:id/showeach', listingController.showeachid);

//create get listing
router.get('/listing/new', listingController.creategetlisting);

//listing get route
router.get('/listing', listingController.listinggetroute);

//home route
router.get('/', listingController.homeroute);

module.exports = router;