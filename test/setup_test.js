'use strict';

var Github = require('../');
var assert = require('should');

describe('setup', function () {

  it('should not be able to initialize without a configuration object.', function () {
    (function(){
      new Github();
    }).should.throw('You must provide a github configuration object.')
  });

  it('should not be able to initialize with a string ', function () {
    (function(){
      new Github('configuration');
    }).should.throw('Your github configuration must be an object.')
  });

  it('should not be able to initialize with a number ', function () {
    (function(){
      new Github(12);
    }).should.throw('Your github configuration must be an object.')
  });

  it('should not be able to initialize without given version', function () {
    (function(){
      new Github({});
    }).should.throw('You must provide a api version.')
  });

  it('should be able to initialize', function () {
    (function(){
      new Github({version: '3.0.0'});
    }).should.not.throw();
  });

  it('should be able to initialize with oauth', function () {
    (function(){
      new Github({
        version: "3.0.0",
        oauth:{
          type: "oauth",
          key: "clientID",
          secret: "clientSecret"
        }
      });
    }).should.not.throw();
  });
});
