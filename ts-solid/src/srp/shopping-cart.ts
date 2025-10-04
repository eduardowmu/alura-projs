type CartItem = {
  name: string;
  price: number
}

type OrderStatus = 'open' | 'close';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    //aqui, o "+" serve para converter para numero
    return parseFloat(this._items.reduce(
      (total, next) => total + next.price, 0
    ).toFixed(2));
  }

  checkout(): void {
    if(this.isEmpty()) {
      console.log('Cart is empty!')
      return;
    }

    this._orderStatus = 'close';
    this.sendMessage('Message sent successfull');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Order safe successfully');
  }

  clear(): void {
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.92 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });

console.log(shoppingCart);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);