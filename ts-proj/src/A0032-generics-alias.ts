interface PersonProtocol<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  surname: T;
  age: U;
}

const student: PersonProtocol<string, number> = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  age: 41,
}

const teacher: PersonProtocol<number, number> = {
  name: 123,
  surname: 456,
  age: 41,
}

const doctor: PersonProtocol = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  age: 41,
}

const anyPerson: PersonProtocol2 = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  age: 41,
}

console.log(student);
console.log(teacher);
console.log(doctor);
console.log(anyPerson);