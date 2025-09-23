type Vehycle = {
  brand: string;
  year: number;
};

type Car = {
  brand: Vehycle['brand'];//string;
  year: Vehycle['year'];//number;
  name: string;
}

const car: Car = {
  brand: 'Honda',
  year: 2025,
  name: 'Fit'
}

console.log(car);