const _ = require('./../../../index');

test('normalIntNumber', function() {
    expect(_.isInt(12)).toBe(true);
});

test('normalFloatNumber', function() {
    expect(_.isInt(12.1)).toBe(false);
});

test('stringIntNumber', function() {
    expect(_.isInt('12')).toBe(true);
});

test('stringFloatNumber', function() {
    expect(_.isInt('12.1')).toBe(false);
});

test('allowLeadingZeroesStringIntNumber', function() {
    expect(_.isInt('012')).toBe(true);
});

test('notAllowLeadingZeroesStringIntNumber', function() {
    expect(_.isInt('012', {'allow_leading_zeroes': false})).toBe(false);
});

test('normalIntNumberMin1', function() {
    expect(_.isInt(12, {min: 11})).toBe(true);
});

test('normalIntNumberMin2', function() {
    expect(_.isInt(12, {min: 12})).toBe(true);
});

test('normalIntNumberMin3', function() {
    expect(_.isInt(12, {min: 13})).toBe(false);
});

test('normalIntNumberMax1', function() {
    expect(_.isInt(12, {max: 11})).toBe(false);
});

test('normalIntNumberMax2', function() {
    expect(_.isInt(12, {max: 12})).toBe(true);
});

test('normalIntNumberMax3', function() {
    expect(_.isInt(12, {max: 13})).toBe(true);
});

test('normalIntNumberLt1', function() {
    expect(_.isInt(12, {lt: 11})).toBe(false);
});

test('normalIntNumberLt2', function() {
    expect(_.isInt(12, {lt: 12})).toBe(false);
});

test('normalIntNumberLt3', function() {
    expect(_.isInt(12, {lt: 13})).toBe(true);
});

test('normalIntNumberGt1', function() {
    expect(_.isInt(12, {gt: 11})).toBe(true);
});

test('normalIntNumberGt2', function() {
    expect(_.isInt(12, {gt: 12})).toBe(false);
});

test('normalIntNumberGt3', function() {
    expect(_.isInt(12, {gt: 13})).toBe(false);
});