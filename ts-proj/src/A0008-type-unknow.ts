//diferença entre any x unknow
let x: any;
x = 10;
x = true;
x = '100';
const y = 500;
console.log(x + y);

let a: unknown;
a = 10;
a = true;
a = '100';
a = 100;
const b = 500;
/*unknow não permite a mesma 
operação feita em x + y*/
console.log(Number(a) + b);