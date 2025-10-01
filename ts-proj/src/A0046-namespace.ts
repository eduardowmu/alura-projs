/* eslint-disable @typescript-eslint/no-namespace */
export namespace MyNamespace {
  const name = 'Eduardo';

  export class NamespacePerson {
    constructor(public name: string) {}
  }

  const person = new NamespacePerson('Eduardo');
  console.log(person);
  console.log(person.name);
}

/* 
 * Como a classe não está definida fora do Namespace,
 * Isso não é possível executar
const person = new NamespacePerson('Eduardo');
console.log(person);
 * Mas há um jeito de ser usado:
*/

const person = new MyNamespace.NamespacePerson('Eduardo');
console.log(person);
console.log(person.name);

const cte = 'Hello World';