const objetoA: {
  //não é possível mais alterar
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  /*index signature, usado para caso precise criar
  um atributo extra*/
  [key: string]: unknown; //pode ser 'any' também mas não é recomendado
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

console.log(objetoA.chaveA);
console.log(objetoA.chaveB);

objetoA.chaveC = 'Nova chave'
console.log(objetoA.chaveC);

console.log(objetoA);
