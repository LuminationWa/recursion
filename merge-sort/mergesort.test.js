const mergeSort = require("./mergesort");

test("returns correct value", () => {
  expect(mergeSort([633, 82, 979, 924, 151, 145, 757, 1000])).toEqual([82, 145, 151, 633, 757, 924, 979, 1000]);
});

test.skip("returns correct value *", () => {
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
