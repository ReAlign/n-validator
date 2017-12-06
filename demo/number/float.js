const _V = require('./../../index');

console.log(_V.isFloat('012.1'));
console.log(_V.isFloat(12.1));
console.log(_V.isFloat(12));
console.log(_V.isFloat('12'));
console.log(_V.isFloat('012'));