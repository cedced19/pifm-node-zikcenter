#!/usr/bin/env node
'use strict';
var config = require('./config.json'),
    pkg = require('./package.json'),
    log = require('./lib/log'),
    findCommand = require('./lib/find-command'),
    isUrl = require('is-url'),
    colors = require('colors'),
    exec = require('child_process').exec,
    proc = null,
    lastzik = false,
    currentzik = false;

if (!isUrl(config.url)) {
    log(colors.red('You must set a valid url in config.json file!'));
    process.exit(1);
}

var list = require('./lib/ls')(config);

var set = function (zik) {
  lastzik = currentzik;
  currentzik = zik;
  if (proc) proc.kill();
  log('Music ' + colors.green(zik.name) + ' is launched!');
  exec(findCommand(config, zik), null, function () {
    proc = null;
    random();
  });
};

var random = function () {
  var number = Math.floor(Math.random() * list.length);
  if (currentzik != list[number]) {
    set(list[number]);
  } else {
    random();
  }
};

require('check-update-github')({
  name: pkg.name,
  currentVersion: pkg.version,
  user: 'cedced19'
}, function (err, lastestVersion, defaultMessage) {
  if (!err) {
    console.log( + defaultMessage);
  }
});
log('Now this will broadcast on ' + colors.green(config.freq) + ' MHz and the rate is ' + colors.green(config.rate) + ' Hz.');
var listing = 'This musics will be played ';
for (var zik in list) {
  listing += '\n- ';
  listing += list[zik].name;
}
log(listing);
random();
