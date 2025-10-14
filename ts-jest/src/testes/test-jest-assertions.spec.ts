test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).toBe(1);
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).toEqual(1);
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).not.toBeNull();
});

test('Primitive values', () => {
  const numValue = null;
  expect(numValue).toBeNull();
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).not.toBeFalsy();
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).toBeGreaterThan(0);
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).toBeLessThan(10);
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).toBeCloseTo(1, 2);
});

test('Primitive values', () => {
  const numValue = 1;
  expect(numValue).toBeCloseTo(0.9999);
});

test('Objects', () => {
  const person = { name: 'Luiz', age: 30 };
  const person2 = { ...person };
  expect(person).not.toBe(person2);
});

test('Objects', () => {
  const person = { name: 'Luiz', age: 30 };
  const person2 = { ...person };
  expect(person).toEqual(person2);
});

test('Objects', () => {
  const person = { name: 'Luiz', age: 30 };
  const person2 = { ...person };
  expect(person).toHaveProperty('name');
});

test('Objects', () => {
  const person = { name: 'Luiz', age: 30 };
  expect(person).toHaveProperty('age', 30);
});