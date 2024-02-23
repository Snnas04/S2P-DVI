const { sum } = require('./index.js');
const assert = require('assert');

// equal
test('test with equal', () => {
    assert.equal(sum(1, 2), 3);
})

// notEqual
test('test with not equal', () => {
    assert.notEqual(sum(1, 2), 4);
})

// deepEqual
test('test with deep equal', () => {
    assert.deepEqual(sum("a", "b"), "ab");
})

// les dues estructures son exactament iguals, amb el set no importa l'ordre ni els duplicats
test('second test with deep equal', () => {
    assert.deepEqual({
        a:1,
        b:{a:1, b:"a"},
        c:[1,2,3],
        d:new Set([1,2,3]),
    }, {
        a:1,
        b:{a:1, b:"a"},
        c:[1,2,3],
        d:new Set([3,1,2,3]),
    });
})

// notDeepEqual
test('test with not deep equal', () => {
    assert.notDeepEqual(sum(1, 2), 6);
})

// ok
// si es false done error - string buida, 0, null, undefined, NaN, false
test('test with ok - true', () => {
    assert.ok(1);
})

test('test with ok - false string', () => {
    assert.ok("false");
})
