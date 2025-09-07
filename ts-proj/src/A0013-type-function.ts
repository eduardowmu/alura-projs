type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];
  for(let i = 0; i < array.length; i++) {
                            //assertion
    newArray.push(callbackfn(array[i]!));
  }

  return newArray;
}

/**
 * vamos fazer com que um array de caracteres se tornem
 * maiúsculas
 */
const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);