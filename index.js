/*!
 * handlebars-helpers-web-example (https://github.com/doowb/handlebars-helpers-web-example)
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('handlebars-helpers-web-example');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('handlebars-helpers-web-example')) return;

    this.define('handlebars-helpers-web-example', function() {
      debug('running handlebars-helpers-web-example');
      
    });
  };
};
