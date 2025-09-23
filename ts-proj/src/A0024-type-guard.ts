function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? 
         a + b : `${a}${b}`;
}

console.log(add(5, 7));
console.log(add('5', '7'));

type Person = {tipo: 'person', name: string};
type Animal = {tipo: 'animal', color: string};
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  tipo: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  switch(obj.tipo) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.color);
      return;
  }
}

showName(new Student('Eduardo'));
showName({tipo: 'animal', color: 'pink'});