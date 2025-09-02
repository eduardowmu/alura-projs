enum Cores {
  RED = 10,
  BLUE = 100,
  YELOOW = 200,
}

console.log(Cores);
console.log(Cores.RED);
console.log(Cores.BLUE);
console.log(Cores.YELOOW);
//para os indices 0, 1 e 2, tornam se undefined
console.log(Cores[10]);  
console.log(Cores[100]);
console.log(Cores[200]);
console.log(Cores.RED.toString());
console.log(Cores.BLUE.toString());
console.log(Cores.YELOOW.toString());