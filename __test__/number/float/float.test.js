const _ = require('./../../../index');

test('normalIntNumber', function() {
    expect(_.isFloat(12)).toBe(true);
});

test('normalFloatNumber', function() {
    expect(_.isFloat(12.1)).toBe(true);
});

test('stringIntNumber', function() {
    expect(_.isFloat('12')).toBe(true);
});

test('stringFloatNumber', function() {
    expect(_.isFloat('12.1')).toBe(true);
});

test('normalFloatNumberMin1', function() {
    expect(_.isFloat(12.1, {min: 11.2})).toBe(true);
});

test('normalFloatNumberMin2', function() {
    expect(_.isFloat(12.1, {min: 12.1})).toBe(true);
});

test('normalFloatNumberMin3', function() {
    expect(_.isFloat(12.1, {min: 12.3})).toBe(false);
});

test('normalFloatNumberMax1', function() {
    expect(_.isFloat(12.1, {max: 11.2})).toBe(false);
});

test('normalFloatNumberMax2', function() {
    expect(_.isFloat(12.1, {max: 12.2})).toBe(true);
});

test('normalFloatNumberMax3', function() {
    expect(_.isFloat(12.1, {max: 12.3})).toBe(true);
});

test('normalFloatNumberLt1', function() {
    expect(_.isFloat(12.1, {lt: 11.2})).toBe(false);
});

test('normalFloatNumberLt2', function() {
    expect(_.isFloat(12.1, {lt: 12})).toBe(false);
});

test('normalFloatNumberLt3', function() {
    expect(_.isFloat(12.1, {lt: 13})).toBe(true);
});

test('normalFloatNumberGt1', function() {
    expect(_.isFloat(12.1, {gt: 11})).toBe(true);
});

test('normalFloatNumberGt2', function() {
    expect(_.isFloat(12.1, {gt: 12.1})).toBe(false);
});

test('normalFloatNumberGt3', function() {
    expect(_.isFloat(12.1, {gt: 13})).toBe(false);
});