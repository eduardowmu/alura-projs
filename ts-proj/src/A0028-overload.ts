type adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
}

const adderFunc: adder = (x: number, 
  y?: number, ...args: number[]) => {
  if(args.length > 0) 
    return args.reduce((s, v) => s + v, 0 + x + (y || 0));
  
  return x + (y || 0);
}

console.log(adderFunc(1));
console.log(adderFunc(1, 10));
console.log(adderFunc(1, 10, 100, 200, 500));