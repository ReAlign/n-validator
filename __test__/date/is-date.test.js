const _ = require('./../../index');

test('normalDate1', function() {
    expect(_.isDate('2017-01-01')).toBe(true);
});

test('normalDate2', function() {
    expect(_.isDate('2017/01/01')).toBe(false);
});

test('separatorDate1', function() {
    expect(_.isDate('2017/01/01', {separator: '/'})).toBe(true);
});

test('separatorDate2', function() {
    expect(_.isDate('2017-01-01', {separator: '#'})).toBe(false);
});