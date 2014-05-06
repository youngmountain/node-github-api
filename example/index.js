'use strict';

var Github = require("../lib/github-api");

var config = {
  version: "3.0.0",
  // oauth:{
  //   type: "oauth",
  //   key: "clientID",
  //   secret: "clientSecret"
  // }
};

var github = new Github(config);

// github.getFollowers('kwakayama');

github.getStars('stefanbuck', 19422460)
.then(function(stars) {
  console.dir(stars.length);
})
.catch(function(err) {
  console.error(err);
});
