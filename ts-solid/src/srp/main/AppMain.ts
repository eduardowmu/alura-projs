import { Order } from '../model/Order';
import { Product } from '../model/Product';
import { ShoppingCart } from '../model/shopping-cart';
import { Persistency } from '../persistency/Persistency';
import { Messaging } from '../service/Messaging';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.92));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);