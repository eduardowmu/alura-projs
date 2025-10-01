function decorator(
  classPrototype: any, 
  methodName: string, 
  descriptor: PropertyDescriptor): 
    PropertyDescriptor | void {
  //any 
  
    /*
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptor);
    */
    return {
      //writable: false
      value: function(...args: any[]) {
        return args[0].toUpperCase();
      }
    };
}

export class OnePerson {
  name: string;
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

  @decorator
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

//Passando para writable, isso abaixo deve sair
//person.method = () => 'UOOOOOOOOW';

console.log(person.method('Hi World'))