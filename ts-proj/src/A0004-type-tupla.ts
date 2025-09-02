const dadosCliente: [number, string] = [1, 'Eduardo'];
console.log(dadosCliente);
//mudando o numero
dadosCliente[0] = 2;
dadosCliente[1] = 'Watanabe';

console.log(dadosCliente);
console.log(dadosCliente[0]);
console.log(dadosCliente[1]);

const dadosCliente2: [number, string, string?] = [3, 'Murakoshi']
console.log(dadosCliente2);

dadosCliente2[2] = 'Eduardo';
console.log(dadosCliente2);

const dadosCliente3: [number, string, ...string[]] = 
                     [4, 'Watanabe', 'Murakoshi', 'Eduardo'];
console.log(dadosCliente3);

/*retirando um valor da tupla (fila), o último que entrou
é o primeiro a sair*/
dadosCliente.pop();
console.log(dadosCliente);

dadosCliente3.pop();
console.log(dadosCliente3);