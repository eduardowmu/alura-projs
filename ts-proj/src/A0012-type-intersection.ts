/*este tipo é semelhante ao alias "|", 
porém é uma lógica AND*/
type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };

type Pessoa = HasName | HasSurname | HasAge;
type Person = HasName & HasSurname & HasAge;

/**
 * Este necessita de pelo menos um atributo
 */
const pessoa: Pessoa = {
  name: 'Eduardo',
};

console.log(pessoa);
/**
 * Se não inserir todos os atributos,
 * erro de compilação.
 */
const person: Person = {
  name: 'Camila',
  surname: 'Viana',
  age: 35
};

console.log(person);