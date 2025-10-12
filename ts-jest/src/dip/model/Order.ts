import { CustomerOrder } from '../interface/CustomerProtocol';
import { MessagingProtocol } from '../interface/MessagingProtocol';
import { OrderStatus } from '../interface/OrderStatus';
import { PersistencyProtocol } from '../interface/PersistencyProtocol';
import { ShoppingCartProtocol } from '../interface/ShoopingCartProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
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
      `Partial Total Order: ${this.shoppingCart.total()}
       Total Order: ${this.shoppingCart.totalWithDiscount()}`
    );
    
    this.persistency.saveOrder();
    this.shoppingCart.clear();
    console.log(this.customer);
  }
}