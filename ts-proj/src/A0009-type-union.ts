let somaOuConcatena = (
  a: number | string | boolean, 
  b: number | string | boolean) => {
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

console.log(somaOuConcatena(10, 30));
console.log(somaOuConcatena('10', '30'));
console.log(somaOuConcatena(10, '30'));
console.log(somaOuConcatena(true, '30'));