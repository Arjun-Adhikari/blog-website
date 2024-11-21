const Listing = require("../models/user.js");

module.exports.updatelisting = async (req, res) => {
    let { id } = req.params;
    let { subject: newSubject, date: newDate, title: newTitle, description: newDescription } = req.body;
    let updatedListing = await Listing.findByIdAndUpdate(id, { subject: newSubject, date: newDate, title: newTitle, description: newDescription }, { runValidator: true, new: true });
    res.redirect('/listing');
}

module.exports.editlisting = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render('edit.ejs', { listing });
}

module.exports.deletelisting = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.redirect('/listing');
}


module.exports.postnewlisting = async (req, res) => {
    let { subject, date, title, description } = req.body;
    let newListing = new Listing({
        subject: subject,
        date: date,
        title: title,
        description: description,
    });
    await newListing.save().then((res) => {
        router
    }).catch((err) => {
        console.log(err);
    })
    res.redirect('/listing')
}

module.exports.showeachid = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    console.log("this is showeach");
    console.log(listing);
    res.render('show-each-listing.ejs', { listing });
}

module.exports.creategetlisting = (req, res) => {
    res.render('new.ejs');
}

module.exports.listinggetroute = async (req, res) => {
    let listings = await Listing.find({});
    res.render('listing.ejs', { listings });
}

module.exports.homeroute = (req, res) => {
    res.send("home");
}