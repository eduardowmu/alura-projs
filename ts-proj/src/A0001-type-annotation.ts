const nome: string = 'Luiz';
const idade: number = 30; //10 | 1.57 | -5.55 | 0xf00d | 0b1010
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
//const big: bigint = 10n;


//Arrays
const arrayNumbers: Array<number> = [1, 2, 3]; // ou
const arrayNumbers2: number[] = [1, 2, 3];

const arrayStrings: Array<string> = ['1', '2', '3'];
const arrayStrings2: string[] = ['1', '2', '3'];

//objetos
const person: {
  name: string,
  age: number,
  //atributo opcional
  adult?: boolean
} = {
  name: 'Eduardo',
  age: 41
};

console.log(person.name);

//funções
function soma(x: number, y: number) {
  return x + y;
}

console.log(soma(2, 3));

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma2(4, 5));

const soma3 = (x: number, y: number) => {
  return x + y;
}

console.log(soma3(5, 6));

//any
const show = (anything: any) => {
  return anything;
}

console.log(show('Olá'));
console.log(show(10));

//void
function whithoutReturn(...args: any[]): void {
  console.log(args.join(' '));
}

whithoutReturn('Função', 'sem retorno', 10);
