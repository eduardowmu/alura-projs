type TypePerson = {
  name: string;
  surname: string;
  completeName(): string;
}

export class Person implements TypePerson {
  constructor(public name: string, public surname: string) {}

  completeName(): string {
    return this.name + ' ' + this.surname;
  }
}

const person = new Person('Eduardo', 'Murakoshi');
console.log(person);
console.log(person.completeName());