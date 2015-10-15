#!/usr/bin/env node
'use strict';
var request = require('sync-request');

module.exports = function (config) {
  var res = request('GET', config.url + config.api);
  return JSON.parse(res.getBody('utf8'));
};
