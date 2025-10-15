import { Persistency } from '../dip/persistency/Persistency';
afterEach(() => jest.clearAllMocks());

it('Persistency Test: It should returns undefined', () => {
  const sut = new Persistency();
  const consoleSpy = jest.spyOn(console, 'log');
  sut.saveOrder();
  expect(consoleSpy).toHaveBeenCalledTimes(1);
});

it('Persistency Test: It should returns undefined', () => {
  const sut = new Persistency();
  const consoleSpy = jest.spyOn(console, 'log');
  sut.saveOrder();
  expect(consoleSpy).toHaveBeenCalledTimes(1);
});

it('Persistency Test: It should returns undefined', () => {
  const sut = new Persistency();
  const consoleSpy = jest.spyOn(console, 'log');
  sut.saveOrder();
  expect(consoleSpy).toHaveBeenCalledWith(
    'Order safe successfully');
});