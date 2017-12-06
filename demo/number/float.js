const _V = require('./../../index');

console.log(_V.isFloat(12));
// console.log(_V.isInt(12.1));
// console.log(_V.isInt('12'));
// console.log(_V.isInt('012'));
// console.log(_V.isInt('012', {'allow_leading_zeroes': false}));

// console.log(_V.isInt(12, {min: 13}));
// console.log(_V.isInt(12, {max: 13}));
// console.log(_V.isInt(12, {lt: 13}));
// console.log(_V.isInt(12, {gt: 12}));