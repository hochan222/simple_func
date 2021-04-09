const formatNumber = require("./script");

test("1000", () => {
  expect(formatNumber(1000)).toBe("1,000");
});

test("123456", () => {
  expect(formatNumber(123456)).toBe("123,456");
});

test("1234567", () => {
  expect(formatNumber(1234567)).toBe("1,234,567");
});

test("12345678", () => {
  expect(formatNumber(12345678)).toBe("12,345,678");
});

test("a1234", () => {
  expect(() => formatNumber('a1234')).toThrow();
});
