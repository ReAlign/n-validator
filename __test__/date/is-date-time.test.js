const _ = require('./../../index');

test('normalDate', function() {
    expect(_.isDateTime('2017/01/01')).toBe(false);
});

test('normalDateTime1', function() {
    expect(_.isDateTime('2017-01-01 12:12:12')).toBe(true);
});

test('strictModeFalseDateTime', function() {
    expect(_.isDateTime('2017-01-01  12:12:12')).toBe(false);
});

test('strictModeFalseDateTime2', function() {
    expect(_.isDateTime('2017-01-01  12:12:12', {strictMode: false})).toBe(true);
});

test('separatorDateTime', function() {
    expect(_.isDateTime('2017-01-01 12:12:12', {separator: '/'})).toBe(false);
});

test('separatorDateTime2', function() {
    expect(_.isDateTime('2017/01/01 12:12:12', {separator: '/'})).toBe(true);
});