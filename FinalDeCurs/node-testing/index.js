const sum = (a, b) => {
    return a + b;
}

const rest = (a, b) => {
    return a - b;
}

const mult = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return b === 0 ? "Error" : a / b;
}

module.exports = { sum, rest, mult, div };
