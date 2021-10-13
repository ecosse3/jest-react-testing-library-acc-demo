let count: number;

beforeEach(() => {
  count = 0;
});

test("plus function", () => {
  const plusFunction = jest.fn((count) => count + 1);

  expect(plusFunction(count)).toBe(1);
  expect(plusFunction).toHaveBeenCalledWith(count);
});

test("minus function", () => {
  const minusFunction = jest.fn((count) => count - 1);

  expect(minusFunction(count)).toBe(-1);
  expect(minusFunction).toHaveBeenCalledWith(count);
});
