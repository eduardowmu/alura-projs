export function uniObjects<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);//{...obj1, ...obj2};
}

const object1 = { key1: 'value1' };
const object2 = { key2: 'value2' };

const object12 = uniObjects(object1, object2);
console.log(object12);