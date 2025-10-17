import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from '../dip/strategy/Discount';

const discount = (className: new () => Discount): Discount => {
  return new className();
}

afterEach(() => jest.clearAllMocks());

it('Should have no discount', () => {
  const sut = discount(NoDiscount)
  expect(sut.calculate(100.00)).toBe(100.00);
});

it('Should have 10% discount', () => {
  const sut = discount(TenPercentDiscount)
  expect(sut.calculate(100.00)).toBe(90.00);
});

it('Should have 50% discount', () => {
  const sut = discount(FiftyPercentDiscount)
  expect(sut.calculate(100.00)).toBe(50.00);
});

it('Should have 50% discount', () => {
  const sut = discount(FiftyPercentDiscount)
  const value = sut.calculate(100.99).toFixed(2);
  expect(value).toBe('50.49');
});