const {add } = require('../index');

test('adds 1,2,3 to equal 6', () => {
    expect(add('1,2,3')).toBe(6);
});

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('1', () => {
    expect(add('1')).toBe(1);
});