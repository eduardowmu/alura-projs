//declarando literalmente um valor de tipo
let x: 10 = 10;
//x = 200 -- impossível
console.log(x * 20);

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

//função que aceita apenas as cores dos parametros
const escolhaCor = (cor: 'Red' | 'Yellow' | 'Green'): string => {
  return cor;
}
console.log(escolhaCor('Red'));