/* Fill out these functions using Mongoose queries*/

'use strict';
var Listing = require('./ListingSchema'),
    mongoose = require('mongoose'),
    config = require('./config');

var db = mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({name: "Library West"}, function(err, item) {
    if (err) 
      throw err;

    console.log(item);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({code: "CABL"}, function(err) {
   if (err) 
    throw error;

   console.log("Successful deletion of 'CABL'")
 });
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   var real_address = "1953 Museum Rd Gainesville, FL 32611"
  Listing.find({name: "Phelps Laboratory"}, function(err, item) {

    if (err) 
      throw err;

    if (!item instanceof Array) item = [item]
    item.forEach(function(item) {
      item.save(function(err) {
        if (err) 
          throw err;

        console.log(item);
      });
    })
  });
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, item) {
    if (err) 
      throw err;

    if (require.main === module)
      console.log(item);
    
    else 
      console.log(Object.keys(item).length);
    
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
