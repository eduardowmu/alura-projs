//Record
const obj1: Record<string, string | number> = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  age: 41,
};

console.log(obj1);

type PersonProtocol = {
  name?: string;
  surname?: string;
  age?: number;
};

//Required
type PersonRequired = Required<PersonProtocol>;

const obj2: PersonProtocol = {
  name: 'Eduardo',
  surname: 'Murakoshi',
};

console.log(obj2);

//desta forma tudo se transforma obrigatório
const obj3: PersonRequired = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  age: 41,
};

console.log(obj3);

//Partial, o contrário de Required
type PersonPartial = Partial<PersonRequired>;

const obj4: PersonPartial = {
  name: 'Eduardo',
};

console.log(obj4);

//somente leitura 
type PersonReadOnly = Readonly<PersonRequired>;

const obj5: PersonReadOnly = {
  name: 'Eduardo',
  surname: 'Murakoshi',
  age: 41,
}

console.log(obj5);

//Pick
type PersonPick = Pick<PersonRequired, 'name' | 'surname'>;

const obj6: PersonPick = {
  name: 'Eduardo',
  surname: 'Murakoshi',
}

console.log(obj6);

export default 1;