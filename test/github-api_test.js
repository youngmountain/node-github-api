'use strict';

var githubApi = require('../lib/github-api.js');
var assert = require('should');

describe('githubApi', function () {

  it('should be awesome', function () {
    githubApi.awesome().should.equal('awesome');
  });

});
