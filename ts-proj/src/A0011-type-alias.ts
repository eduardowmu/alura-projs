type Person = {
  nome: string;
  birthdate: Date;
  corPreferida?: CorPreferida;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Ciano' | 'Magent' | 'Yellow' | 'Black';
type CorPreferida = ColorRGB | ColorCMYK;

const person: Person = {
  nome: 'Eduardo',
  birthdate: new Date('2000-10-10'),
  corPreferida: 'Red',
};

console.log(person);