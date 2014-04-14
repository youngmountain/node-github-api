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

github.getStars('kwakayama')
.then(function(stars) {
  console.dir(stars.length);
})
.fail(function(err) {
  console.error(err);
});
