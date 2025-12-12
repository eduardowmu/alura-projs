export const name = 'Eduardo';
export const surname = 'Murakoshi';
export const age = 41;

export function sum(x, y) {
    if(Number.isInteger(x) && Number.isInteger(y)) return x + y;
    return '';
}

//não é possível ter mais de um default
export default (x, y) => x * y;

//export { name, surname, age };

export class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}