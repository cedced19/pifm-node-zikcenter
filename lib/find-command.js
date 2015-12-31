#!/usr/bin/env node
'use strict';

module.exports = function (config, zik) {
  var pifm = process.cwd() + '/pifm/pifm';
  return 'sox -t mp3 "' + config.url + zik.uri.replace('./', '/') + '" -t wav -  | sudo sudo ' + pifm + ' -freq ' + config.freq + ' -rt "PIFM: '+ zik.name + '" -audio -';
};
