'use strict';

var Github = require('../');
var assert = require('should');

describe('githubApi', function () {

  var github = null;

  beforeEach(function() {
    var config = {
      version: "3.0.0"
    };
    github = new Github(config);

    github.githubApi.repos.getStarredFromUser = function(settings, cb) {
      cb(null, [{id:1002}, {id:1001}, {id:1000}])
    }
  });

  it('should return a list of all starred repos', function (cb) {
    github.getStars('username')
    .then(function(stars) {
      stars.should.have.a.lengthOf(3);
      cb();
    }).catch(cb);
  });

  it('should return a subset of starred repos', function (cb) {
    github.getStars('username', 1000)
    .then(function(stars) {
      stars.should.have.a.lengthOf(2);
      cb();
    }).catch(cb);
  });
});
