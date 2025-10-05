import { OrderStatus } from '../interface/OrderStatus';
import { Persistency } from '../persistency/Persistency';
import { Messaging } from '../service/Messaging';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if(this.shoppingCart.isEmpty()) {
      console.log('Cart is empty!')
      return;
    }

    this._orderStatus = 'close';
    
    this.messaging.sendMessage(
      `Total Order: ${this.shoppingCart.total()}`
    );
    
    this.persistency.saveOrder();
    this.shoppingCart.clear();
  }
}