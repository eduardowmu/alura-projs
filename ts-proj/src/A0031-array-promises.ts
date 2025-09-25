type MyType = number;
//const arrayNum: number[] = [1, 2, 3, 4, 5, 6];
const arrayNum: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNum);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  })
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));