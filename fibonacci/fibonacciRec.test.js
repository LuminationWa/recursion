const fibonacciRec = require('./fibonacciRec');

// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.

test('returns correct value', () => {
    expect(fibonacciRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('returns correct value *', () => {
    expect(fibonacciRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
