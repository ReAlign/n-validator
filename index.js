
'use strict';

let _v = {};

// base
require('./src/lib/base-regexp/index')(_v);

// base enum
require('./src/lib/base-enum/index')(_v);

// base typeof
require('./src/lib/base-type/type-of')(_v);

// number
require('./src/lib/number/base-rule')(_v);
require('./src/lib/number/is-int')(_v);
require('./src/lib/number/is-float')(_v);

// date
require('./src/lib/date/is-date-str')(_v);

// boolean
require('./src/lib/boolean/is-boolean')(_v);

// dataURI
require('./src/lib/uri/is-data-uri')(_v);

module.exports = _v;