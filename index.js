
'use strict';

let _v = {};

// base
require('./src/lib/base-regexp/index')(_v);
require('./src/lib/base-enum/index')(_v);
require('./src/lib/base-type/type-of')(_v);
require('./src/lib/base-object/object-compare')(_v);

// base function
require('./src/lib/all/is-required')(_v);
require('./src/lib/string/is-length')(_v);

// number
require('./src/lib/number/base-rule')(_v);
require('./src/lib/number/is-int')(_v);
require('./src/lib/number/is-float')(_v);

// date
require('./src/lib/date/is-date-str')(_v);

// boolean
require('./src/lib/boolean/is-boolean')(_v);

// dataURI
// require('./src/lib/uri/is-data-uri')(_v);

module.exports = _v;