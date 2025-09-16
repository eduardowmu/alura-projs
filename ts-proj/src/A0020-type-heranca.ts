export class Person {
  constructor(
    public name: string, 
    public surname: string, 
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getCompleteName(): string {
    return this.name + " " + this.surname;
  }
}

export class Student extends Person {}

export class Client extends Person {}

const person = new Person('Camila', 'Murakoshi', 35, '111.111.111-11');
console.log(person);

const student = new Student('Eduardo', 'Murakoshi', 41, '000.000.000-00');
console.log(student);

const client = new Client('Oscar', 'Murakami', 62, '222.222.222-22');
console.log(client);