
/*
@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou decorator de Animal');
  return class extends target {
    color: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}
*/
@reverseNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Start an animal');
  }
}

function reverseNameAndColor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('I am an animal decorator as ', target);
  return class extends target {
    color: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = args[0];
      this.color = args[1];
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

//const AnimalDecorated = decorator(Animal);

const animal = new Animal('Dobby', 'red');
console.log(animal);