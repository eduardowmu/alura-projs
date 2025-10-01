function decorator(
    classPrototype: any, 
    name: string | symbol
  ): any {
    console.log(classPrototype);
    console.log(name);
    let propertyValue: any;
    return {
      get: () => propertyValue,
      set: (value: any) => {
        if(typeof value === 'string') {
          propertyValue = value.split('').reverse().join('');
          return;
        }
        propertyValue = value;
      }, 
    }
}

export class OnePerson {
  @decorator
  name: string;
  @decorator
  surname: string;
  age: number;

  constructor(
    name: string,
    surname: string,
    age: number
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }
  
  get completeName(): string {
    return `${this.name} ${this.surname}`;
  }

  set completeName(cname: string) {
    const words = cname.split(/\s+/g);
    const firstName = words.shift();
    if(!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }
}

const person = new OnePerson('Eduardo', 'Murakoshi', 41);
console.log(person);

console.log(person.method('Hi World'))