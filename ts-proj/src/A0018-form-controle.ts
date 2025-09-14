export function funcao(this: Date, arg1: string, age: number): void {
  console.log(this);
  console.log(arg1, age);
}

funcao.call(new Date(), 'Eduardo', 41);

//outra forma de chamar
funcao.apply(new Date(), ['Eduardo', 41]);