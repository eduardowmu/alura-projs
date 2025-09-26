export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: {[key: number]: T} = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if(this.isEmpty()) return undefined;
    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  getLength(): number {
    return this.counter;
  }

  showStack(): void {
    for(const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const person1 = new Person('Eduardo', 41);
console.log(person1);

const person2 = new Person('Camila', 35);
console.log(person2);

const person3 = new Person(['Camila'], {age: 35});
console.log(person3);

const person4 = new Person<string, number>('Camila', 35);
console.log(person4);

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('4');
stack.showStack();

const element1 = stack.pop();
console.log(`---\n${element1}\n---`);
stack.showStack();