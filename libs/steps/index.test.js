const steps = require('./index');

test('Step should throw error with step 0', () => {
  expect(() => steps(0, 0, 0)).toThrow();
});

test('Step should work with valid value', () => {
  const res = steps(0, 1, 5);

  expect(res).toEqual([0, 1, 2, 3, 4, 5]);
});

test('Step should return array with initial with same inital and end', () => {
  const res = steps(0, 1, 0);

  expect(res).toEqual([0]);
});

test('Step should throw error if cant reach end with step', () => {
  expect(() => steps(0, 1, 0.1)).toThrow();
});

test('Step should throw error if cant reach end with step', () => {
  expect(() => steps(0, 0.3, 4)).toThrow();
});

test('Step should not throw error if cant reach end with step', () => {
  expect(() => steps(0, 0.1, 3)).not.toThrow();
});

test('Step should not throw error if cant reach end with step', () => {
  expect(() => steps(0, 0.01, 3)).not.toThrow();
});

test('Step should throw error if inital is not number', () => {
  expect(() => steps(0, 1, 'f')).toThrow();
});

test('Step should throw error if last is not number', () => {
  expect(() => steps('f', 1, 0.1)).toThrow();
});
