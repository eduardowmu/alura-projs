import { CartItem } from '../dip/interface/CartItem';
import { CustomerOrder } from '../dip/interface/CustomerProtocol';
import { MessagingProtocol } from '../dip/interface/MessagingProtocol';
import { PersistencyProtocol } from '../dip/interface/PersistencyProtocol';
import { ShoppingCartProtocol } from '../dip/interface/ShoopingCartProtocol';
import { Order } from '../dip/model/Order';
import { Product } from '../dip/model/Product';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }

  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {return 1}
  totalWithDiscount(): number {return 1}
  isEmpty(): boolean {return true}
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {return "";}
  getIDN(): string {return "";}
}

const createSut = () => {
  const shoppingCartMock =  new ShoppingCartMock();
  shoppingCartMock.addItem(new Product('P1', 1.00));
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoppingCartMock, messagingMock, 
    persistencyMock, customerMock);
  
  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  }
}

it('Should not checkout if cart is empty', () => {
  const { sut, shoppingCartMock } = createSut();
  const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty')
    .mockReturnValueOnce(true);
  sut.checkout();
  expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  expect(sut.orderStatus).toBe('open');
});

it('Should checkout if cart is not empty', () => {
  const { sut, shoppingCartMock } = createSut();
  const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty')
    .mockReturnValueOnce(false);
  sut.checkout();
  expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  expect(sut.orderStatus).toBe('close');
});

it('Should not send e-mail to customer', () => {
  const { sut, messagingMock } = createSut();
  const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
  sut.checkout();
  expect(messagingMockSpy).toHaveBeenCalledTimes(0);
});

it('Should not save order', () => {
  const { sut, persistencyMock } = createSut();
  const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
  sut.checkout();
  expect(persistencyMockSpy).toHaveBeenCalledTimes(0);
});

it('Should not clear cart', () => {
  const { sut, shoppingCartMock } = createSut();
  const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
  sut.checkout();
  expect(shoppingCartMockSpy).toHaveBeenCalledTimes(0);
});