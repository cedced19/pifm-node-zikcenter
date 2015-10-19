#!/usr/bin/env node
'use strict';

module.exports = function (config, zik) {
  return 'sox -t mp3 "' + config.url + zik.uri.replace('./', '/') + '" -t wav -  | sudo ./pifm-' + config.version + ' -freq ' + config.freq + ' -rt "PIFM: '+ zik.name + '" -audio -';
};
