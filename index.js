
'use strict';

let _v = {};

// base
require('./src/lib/base-regexp/index')(_v);

// number
require('./src/lib/number/base-rule')(_v);
require('./src/lib/number/is-int')(_v);
require('./src/lib/number/is-float')(_v);

// date
require('./src/lib/date/is-date-str')(_v);

module.exports = _v;