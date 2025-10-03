import lodash from 'lodash';

/*
lodash.mul = function(array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
}
*/

const array = [100, 200, 300, 400];

console.log(lodash.sum(array));
console.log(lodash.min(array));
console.log(lodash.max(array));
console.log(lodash.mean(array));
//console.log(lodash.mul(array));