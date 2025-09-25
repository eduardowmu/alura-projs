/*
type FilterCallback = (
  value: unknown,
  index?: number,
  array?: unknown[],
) => boolean;

export function myFilter(
  array: unknown[],
  callbackfn: FilterCallback,
): unknown[] {
  const novoArray = [];

  for(let i = 0; i < array.length; i++) {
    if(callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltrado = array.filter((num) => num < 5);
console.log(arrayFiltrado);

const arrayFiltrado2 = myFilter(array, (num) => {
  if(typeof num === 'number') return num < 5;
  return false;
});
console.log(arrayFiltrado2);


export function myFilterG<T>(
  array: T[],
  callbackfn: FilterCallback
): T[] {
  const novoArray: T[] = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] !== undefined && callbackfn(array[i])) {
      novoArray.push(array[i] as T);
    }
  }

  return novoArray;
}

const arrayFiltradog = myFilterG(array, (num) => {
  if(typeof num === 'number') return num < 5;
  return false;
});
console.log(arrayFiltradog);
*/

type FilterCallback<T> = (
  value: T,
  index?: number,
  array?: T[],
) => boolean;

export function myFilterG<T>(
  array: T[],
  callbackfn: FilterCallback<T>
): T[] {
  const novoArray: T[] = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] !== undefined && callbackfn(array[i] as T)) {
      novoArray.push(array[i] as T);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltradog = myFilterG(array, (num) =>  num < 5);
console.log(arrayFiltradog);