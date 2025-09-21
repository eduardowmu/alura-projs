export class Person {
  constructor(
    private name: string, 
    private surname: string, 
    private age: number,
    private _cpf: string,
  ) {
    //outra forma de criar setter
    this.cpf = _cpf
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number) : void {
    this.age = age;
  }

  get cpf(): string {
    return this._cpf.replaceAll(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  getCompleteName(): string {
    return this.name + " " + this.surname;
  }

  setName(name: string): void {
    this.name = name;
  }

  setSurname(surname: string): void {
    this.surname = surname;
  }
}

export class Student extends Person {
  constructor(
    name: string, 
    surname: string, 
    age: number, 
    _cpf: string, 
    private enroll: string
  ) {super(name, surname, age, _cpf);}

  getCompleteName(): string {
    return 'Student: ' + super.getCompleteName();
  }
}

export class Client extends Person {
  getCompleteName(): string {
    return 'Client: ' + super.getCompleteName();
  }
}

const person = new Person('Camila', 'Murakoshi', 35, '111.111.111-11');
console.log(person);

const student = new Student('Eduardo', 'Murakoshi', 41, '000.000.000-00', '000000');
console.log(student);

const client = new Client('Oscar', 'Murakami', 62, '222.222.222-22');
console.log(client);

client.cpf = '333.333.333-33';
console.log(client.cpf);