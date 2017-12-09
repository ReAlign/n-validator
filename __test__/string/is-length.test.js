const _ = require('./../../index');

const str1 = 'str';
const str2 = ' string';
const str3 = 123;
test('normalLength1', function() {
    expect(_.isLength(str1)).toBe(3);
});

test('normalLength1opt', function() {
    expect(_.isLength(str1, {min: 1, max: 2})).toBe(false);
});

test('normalLength2', function() {
    expect(_.isLength(str2)).toBe(7);
});

test('normalLength31', function() {
    expect(_.isLength(str3, {min: 1, max: 4})).toBe(false);
});