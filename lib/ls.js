#!/usr/bin/env node
'use strict';
var request = require('sync-request');

module.exports = function (url) {
  var res = request('GET', url + '/api');
  return JSON.parse(res.getBody('utf8'));
};
