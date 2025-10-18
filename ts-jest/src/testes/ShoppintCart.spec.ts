import { ShoppingCart } from '../dip/model/shopping-cart';
import { Discount } from '../dip/strategy/Discount';
import { CartItem } from '../dip/interface/CartItem';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return sut;
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
  const sut = createSut();
  const item1 = createCartItem('Produto1', 10.00);
  const item2 = createCartItem('Produto2', 20.00);
  sut.addItem(item1);
  sut.addItem(item2);
  return sut;
}

it('If initial cart is empty', () => {
  const sut = createSut();
  expect(sut.isEmpty()).toBe(true);
});

it('If cart has 2 items', () => {
  const sut = createSutWithProducts();
  expect(sut.items).toHaveLength(2);
});

it('Total value to be paid test, with or without discount', () => {
  const sut = createSutWithProducts();
  expect(sut.total()).toEqual(30.00);
  expect(sut.totalWithDiscount()).toEqual(30.00);
});

it('If the cart is empty after cleaning', () => {
  const sut = createSutWithProducts();
  sut.clear();
  expect(sut.items.length).toEqual(0);
});

it('If items length is 1 after remove 1', () => {
  const sut = createSutWithProducts();
  sut.removeItem(1);
  expect(sut.items.length).toBe(1);
});