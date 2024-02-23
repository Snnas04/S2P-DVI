const { sum } = require('./index.js');

test('simple sum test', () => {
    expect(sum(1, 2)).toBe(3);
})
