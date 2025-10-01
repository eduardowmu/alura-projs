export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber('123'));
console.log(isNumber(123));

export function sum<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if(isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  //type guard
  return result;
}

console.log(sum(1, 2, 3));
console.log(sum('1', '2', '3'));