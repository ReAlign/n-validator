
'use strict';

let _v = {};

// base
require('./src/lib/base/regexp-about/index')(_v);
require('./src/lib/base/enum-about/index')(_v);
require('./src/lib/base/type-about/type-of')(_v);
require('./src/lib/base/object-about/object-compare')(_v);

// base function
require('./src/lib/base/all/is-required')(_v);

// string
require('./src/lib/string/is-length')(_v);

// number
require('./src/lib/number/base-rule')(_v);
require('./src/lib/number/is-int')(_v);
require('./src/lib/number/is-float')(_v);

// date
require('./src/lib/date/is-date')(_v);
require('./src/lib/date/is-date-time')(_v);

// boolean
require('./src/lib/boolean/is-boolean')(_v);

module.exports = _v;