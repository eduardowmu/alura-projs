// undefined
let x;
console.log(x);

function createPerson(firstName: string, lastName?: string): {
  firstName: string;
  lastName?: string;
} {
  if(!lastName) {
    return {
      firstName
    }
  } else {
    return {
      firstName,
      lastName
    }
  }
}

const person1 = createPerson('Eduardo');
console.log(person1);

const person2 = createPerson('Watanabe', 'Murakoshi');
console.log(person2);

function squareOf(x: any) {
  if(typeof x === 'number') {
    return x * x;
  } 
  return null;
}

const squareOf2 = squareOf(2);
const squareOf2String = squareOf('2');

console.log(squareOf2);
console.log(squareOf2String);