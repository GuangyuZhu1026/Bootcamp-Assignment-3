'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    data_file = require('./listings.json'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
var db = mongoose.connect('mongodb://GuangyuZhu:zgy951026@ds036967.mlab.com:36967/ufwebapps');

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

  fs.readFile('./listings.json', 'utf8', function(err, data) {
    var data = JSON.parse(data).entries;

    data.forEach(function(item) {
      var new_listing = new Listing(item);

      new_listing.save(function(err) {
        if (err) 
          throw err;
      });
    });
  });

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
