const _ = require('./../../index');

test('normalBooleanTrue', function() {
    expect(_.isBoolean(true)).toBe(true);
});

test('normalBooleanTrue2', function() {
    expect(_.isBoolean(true, {strictMode: true})).toBe(true);
});

test('normalBooleanTrue3', function() {
    expect(_.isBoolean(true, {strictMode: false})).toBe(true);
});

test('normalBooleanFalse', function() {
    expect(_.isBoolean(false)).toBe(true);
});

test('normalBooleanTrueStr1', function() {
    expect(_.isBoolean('true')).toBe(true);
});

test('normalBooleanTrueStr2', function() {
    expect(_.isBoolean('true', {strictMode: true})).toBe(false);
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

test('normalBooleanObj', function() {
    expect(_.isBoolean({name: 'true'})).toBe(false);
});

test('normalBooleanArray', function() {
    expect(_.isBoolean([1, 2, 3])).toBe(false);
});