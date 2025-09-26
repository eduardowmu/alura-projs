type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  color: 'Rosa',
  vaccines: ['Vaccine 1', 'Vacina 2'],
  age: 41,
}

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');

console.log(vaccines, color, getKey(animal, 'age'));