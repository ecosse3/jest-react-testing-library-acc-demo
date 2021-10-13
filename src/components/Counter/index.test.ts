let count: number;

beforeEach(() => {
  count = 0;
});

test("check initiall value", () => {
  expect(count).toBe(0);
});

test("add function", () => {
  const addFunction = jest.fn().mockImplementation((state) => state + 1);
  expect(addFunction(count)).toBe(1);
  expect(addFunction).toHaveBeenCalledWith(count);
});

test("minus function", () => {
  const addFunction = jest.fn().mockImplementation((state) => state - 1);
  expect(addFunction(count)).toBe(-1);
  expect(addFunction).toHaveBeenCalledWith(count);
});
