it('Persistency Test success', () => {
  const number = 1;
  expect(number).toBe(1);
});

it('Persistency test failure', () => {
  const number = 2;
  expect(number).not.toEqual(1);
});