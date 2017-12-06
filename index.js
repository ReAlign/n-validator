
'use strict';

let _v = {};

require('./src/lib/base-regexp/index')(_v);
require('./src/lib/number/base-rule')(_v);
require('./src/lib/number/is-int')(_v);
require('./src/lib/number/is-float')(_v);

module.exports = _v;