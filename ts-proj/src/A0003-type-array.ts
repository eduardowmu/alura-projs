//produto de varios numeros
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => 
    acumulador * valor, 1);
}

// concatenação de várias strings
function concatenaArgs(...args: Array<string>): string {
  return args.reduce((arg, valor) => arg + valor);
}

// converte tudo para letras maiúsculas
function toUpperCase(...args: string[]): string[] {
  return args.map((valor => valor.toUpperCase()));
}

const resultNumber = multiplicaArgs(1, 2, 3);
const resultString = concatenaArgs('Eduardo ', 'Watanabe ', 'Murakoshi')
const resultTextUpper = toUpperCase('a', 'c', 'e');

console.log(resultNumber);
console.log(resultString);
console.log(resultTextUpper);