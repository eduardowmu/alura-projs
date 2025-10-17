import { Product } from '../dip/model/Product';

it('Product class Test', () => {
  const product = new Product('product', 10.00);
  expect(product).toBeInstanceOf(Product);
});

it('If Product instance has name', () => {
  const product = new Product('product', 10.00);
  expect(product).toHaveProperty('name');
});

it('If Product instance has name', () => {
  const product = new Product('product', 10.00);
  expect(product).toHaveProperty('price');
});

it('If Product instance has name', () => {
  const product = new Product('product', 10.00);
  expect(product).not.toHaveProperty('quantity');
});

it('If Product instance has name', () => {
  const product = new Product('product', 10.00);
  expect(product.name).not.toBe(null);
});