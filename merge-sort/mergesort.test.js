const mergeSort = require("./mergesort");

test("returns sorted array", () => {
  expect(mergeSort([633, 82, 979, 924, 151, 145, 757, 1000])).toEqual([82, 145, 151, 633, 757, 924, 979, 1000]);
});

test("returns sorted array *", () => {
  expect(mergeSort([633, 82, 979, 924, 151, 145, 757])).toEqual([82, 145, 151, 633, 757, 924, 979]);
});

test("returns sorted array **", () => {
  expect(mergeSort([203, 193, 614, 250, 453])).toEqual([193, 203, 250, 453, 614]);
});