type Constructor = {
  new (...args: any[]): any;
}

function reverseNameAndColor(param1: string, param2: string) {
  //Closure
  return function <T extends Constructor>(target: T): T {
    console.log('I am an animal decorator as ', target);
    return class extends target {
      color: string;
      name: string;
      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return (
          value.split('').reverse().join('') + ' ' +
                param1 + ' ' + ' ' + param2
              );
      }
    };
  }
}

function otherDecorator(param1: string) {
  return function(target: Constructor) {
    console.log('I am other decorator ' + param1);
    return target;
  }
}

@otherDecorator('Parametro de outro decorator')
@reverseNameAndColor('valor1', 'valor2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Start an animal');
  }
}

const animal = new Animal('Dobby', 'red');
console.log(animal);