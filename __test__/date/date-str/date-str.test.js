const _ = require('./../../../index');

test('normalDate1', function() {
    expect(_.isDateStr('2017-01-01')).toBe(true);
});

test('normalDate2', function() {
    expect(_.isDateStr('2017/01/01')).toBe(false);
});

test('separatorDate1', function() {
    expect(_.isDateStr('2017/01/01', {separator: '/'})).toBe(true);
});

test('separatorDate2', function() {
    expect(_.isDateStr('2017-01-01', {separator: '#'})).toBe(false);
});

test('normalDateTime1', function() {
    expect(_.isDateStr('2017-01-01 12:12:12', {time: true})).toBe(true);
});

test('normalDateTime2', function() {
    expect(_.isDateStr('2017-01-01 12:12:12', {time: false})).toBe(false);
});

test('multNBSPDateTime1', function() {
    expect(_.isDateStr('2017-01-01  12:12:12', {time: true})).toBe(false);
});

test('multNBSPDateTime2', function() {
    expect(_.isDateStr('2017-01-01  12:12:12', {time: true, strictMode: false})).toBe(true);
});