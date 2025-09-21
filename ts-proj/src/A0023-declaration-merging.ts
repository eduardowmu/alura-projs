interface Person {
  name: string;
};

interface Person {
  readonly surname: string;
}

interface Person {
  readonly adresses: readonly string[];
}

//caso em que pode ter valor nulo
interface Person {
  age?: number;
}

const person: Person = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  adresses: ['Av. Brasil', 'R. Cruzeiro do Sul'],
}

console.log(person);
console.log(person.name);
console.log(person.surname);
//para que isso dê erro, é necessário add readonly nos
//dois lados
//person.adresses.push('Rua Cruazeiro do Sul');
console.log(person.adresses);
person.age = 41;
console.log(person);