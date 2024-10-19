const {add } = require('../index');

test('adds 1 + 2 to equal 3', () => {
    expect(add('1,2,3')).toBe(6);
});

