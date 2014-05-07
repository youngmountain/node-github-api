/*
 * github-api
 * user/repo
 *
 * Copyright (c) 2014 Kentaro Wakayama
 * Licensed under the MIT license.
 */

'use strict';

var GitHubApi = require('github'),
  Q = require('q'),
  _ = require('lodash');

var Github = function(config) {
  if (!config) {
    throw new Error('You must provide a github configuration object.');
  }

  if (typeof config !== 'object') {
    throw new Error('Your github configuration must be an object.');
  }

  this.githubConfig = config;

  if (!config.version) {
    throw new Error('You must provide a api version.');
  }

  this.githubApi = new GitHubApi({
      // required
    version: config.version
  });
  if (config.oauth) {
    this.githubApi.authenticate(config.oauth);
  }

};

function callStarApi (api, user, page, callback) {

  console.log('get stars page #', page);

  api.repos.getStarredFromUser({
      user: user,
      per_page: 100,
      page: page
    }, function(err, res) {

      if (!res) {
        return callback(err, res);
      }

      callback(null, res);

    });
}

/**
 * List repositories being starred by a user.
 *
 * @param {string} user The usernam of the user for whom to return results for.
 * @param {int} sinceId Returns results with an ID greater than (that is, more recent than) the specified ID.
 */
Github.prototype.getStars = function(user, sinceId) {

  console.log('-----\tstart\t-----');

  var deferred = Q.defer();
  var stars = [];
  var page = 1;
  var that = this;

  var starCallback = function(err, res) {

    if (err) {return deferred.reject(err);}

    // merge stars
    stars = stars.concat(res);

    if (sinceId) {
      var index = _.findIndex(stars, {id: sinceId});
      if (index > -1) {
        return deferred.resolve(stars.slice(0, index));
      }
    }

    if (res.length === 0 || res.length < 100) {
      console.log('-----\tfinish\t-----');
      return deferred.resolve(stars);
    }

    callStarApi(that.githubApi, user, ++page, starCallback);

  };

  callStarApi(this.githubApi, user, page, starCallback);

  return deferred.promise;

};

module.exports = Github;
