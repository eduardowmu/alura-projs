import { IndividualCustomer } from '../model/IndividualCustomer';
import { Order } from '../model/Order';
import { Product } from '../model/Product';
import { ShoppingCart } from '../model/shopping-cart';
import { Persistency } from '../persistency/Persistency';
import { Messaging } from '../service/Messaging';
import { Discount, FiftyPercentDiscount } from '../strategy/Discount';

const discount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('Eduardo', 'Murakoshi', '111.111.111-11')
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.92));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();