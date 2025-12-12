import { Person, sum } from './modulo1';
//default
import operacao from './modulo1';
//import * as moduloInteiro from './modulo1';
import { name } from './modulo1';
import { surname as alias } from './modulo1';
import { name as alias2, surname as alias3, age } from './modulo1';
//import soma2, * as outroModulo from './modulo1';

console. log(alias2, sum(10, 5), operacao(10, 5), name, alias, alias3, age);

console.log(new Person('Camila', 'Da Costa')); 