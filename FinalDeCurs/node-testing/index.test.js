const { sum, rest, mult, div } = require('./index.js');

// suma
test('simple sum test', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum with negative numbers test', () => {
    expect(sum(-1, 2)).toBe(1);
})

// resta
test('simple rest test', () => {
    expect(rest(4, 1)).toBe(3);
})

test('rest with negative numbers test', () => {
    expect(rest(-1, 2)).toBe(-3);
})

// multiplicación
test('simple mult test', () => {
    expect(mult(6, 2)).toBe(12);
})

test('mult with negative numbers test', () => {
    expect(mult(-1, 2)).toBe(-2);
})

// división
test('simple div test', () => {
    expect(div(6, 2)).toBe(3);
})

test('div by 0 test', () => {
    expect(div(6, 0)).toBe("Error");
})

test('div with negative numbers test', () => {
    expect(div(-6, 2)).toBe(-3);
})
