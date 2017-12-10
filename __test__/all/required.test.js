const _ = require('./../../index');

const obj = {
    'number': 12,
    'boolean': false,
    'string': '12',
    'array': [1, 2],
    'object': {
        name: 'realign'
    },
    'null': null
};

console.log(_.isRequired(obj.number));

test('number1', function() {
    expect(_.isRequired(obj.number)).toBe(true);
});

test('number2', function() {
    expect(_.isRequired(obj.number2)).toBe(false);
});

test('boolean1', function() {
    expect(_.isRequired(obj.boolean)).toBe(true);
});

test('boolean2', function() {
    expect(_.isRequired(obj.boolean2)).toBe(false);
});

test('string1', function() {
    expect(_.isRequired(obj.string)).toBe(true);
});

test('string2', function() {
    expect(_.isRequired(obj.string2)).toBe(false);
});

test('array1', function() {
    expect(_.isRequired(obj.array)).toBe(true);
});

test('array2', function() {
    expect(_.isRequired(obj.array2)).toBe(false);
});

test('object1', function() {
    expect(_.isRequired(obj.object)).toBe(true);
});

test('object2', function() {
    expect(_.isRequired(obj.object2)).toBe(false);
});

test('null', function() {
    expect(_.isRequired(obj.null)).toBe(false);
});