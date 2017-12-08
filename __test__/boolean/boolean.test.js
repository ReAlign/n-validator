const _ = require('./../../index');

test('normalBooleanTrue', function() {
    expect(_.isBoolean(true)).toBe(true);
});

test('normalBooleanFalse', function() {
    expect(_.isBoolean(false)).toBe(true);
});

test('normalBooleanTrueStr', function() {
    expect(_.isBoolean('true')).toBe(true);
});

test('normalBooleanFalseStr', function() {
    expect(_.isBoolean('false')).toBe(true);
});

test('normalBoolean1Num1', function() {
    expect(_.isBoolean(1)).toBe(true);
});

test('normalBoolean1Num2', function() {
    expect(_.isBoolean(1, {strictMode: true})).toBe(false);
});