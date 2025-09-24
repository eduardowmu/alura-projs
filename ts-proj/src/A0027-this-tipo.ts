export class Calculator {
  constructor(public num: number) {}

  sum(num: number): this {
    this.num += num;
    return this;
  }

  sub(num: number): this {
    this.num -= num;
    return this;
  }

  div(num: number): this {
    this.num /= num;
    return this;
  }

  mult(num: number): this {
    this.num *= num;
    return this;
  }
}

const calculator = new Calculator(20);
console.log(calculator.sum(10));
console.log(calculator.sub(10));
console.log(calculator.div(10));
console.log(calculator.mult(10));
/*isso é possível pois os métodos retorna o
próprio objeto*/
console.log(calculator.mult(10).div(2));

/**
 * Design Pattenr Builder
 */
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();