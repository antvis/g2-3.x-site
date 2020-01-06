'use strict';

const fs = require('fs');
const os = require('os');
const opn = require('opn');
const ipv4 = require('ipv4');
const chalk = require('chalk');
const rimraf = require('rimraf');
const moment = require('moment');
const mkdirp = require('mkdirp');
const lodash = require('lodash');
const semver = require('semver');
const uuidV4 = require('uuid/v4');
const shelljs = require('shelljs');
const detectPort = require('detect-port');

var _ = lodash.merge({}, lodash);

_.camelcase = (str) => {
  return str.split('-').reduce((str, word) => {
    return str + word[0].toUpperCase() + word.slice(1);
  });
};

_.getConfig = (program) => {
  let cfg = {};

  program.options.forEach((item) => {
    const key = _.camelcase(item.name());

    if (key in program) {

      if (typeof program[key] !== 'function') {
        cfg[key] = program[key];
      }
    }
  });
  return cfg;
};

_.platform = (function() {
  var platform = os.platform();

  return {
    isWindows: platform.indexOf('win') === 0 || platform === 'cygwin',
    isLinux: platform === 'linux' || platform === 'freebsd',
    isOSX: platform === 'darwin'
  };
})();

_.isExistedFile = function(p) {
  p = p.replace(/(\?|#).*$/, '');
  return fs.existsSync(p) && fs.statSync(p).isFile();
};

_.isExistedDir = function(p) {
  return fs.existsSync(p) && fs.statSync(p).isDirectory();
};

_.noCacheRequire = function(resolvedPath) {
  delete require.cache[resolvedPath];
  return require(resolvedPath);
};

_.ipv4 = ipv4;
_.semver = semver;
_.shelljs = shelljs;
_.opn = opn;
_.chalk = chalk;
_.mkdir = mkdirp.sync;
_.rimraf = rimraf.sync;
_.moment = moment;
_.uuid = uuidV4;
_.detectPort = detectPort;

module.exports = _;
