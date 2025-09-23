/*
type ColorsObj = {
  RED: 'vermelho';
  GREEN: 'verde';
  BLUE: 'azul';
};
*/

type ColorsObj = typeof colorsObj;
type KeyColors = keyof ColorsObj;

const colorsObj = {
  RED: 'vermelho',
  GREEN: 'verde',
  BLUE: 'azul',
};

function translateColor(color: KeyColors,//'RED' | 'GREEN' | 'BLUE', 
    colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('RED', colorsObj));
console.log(translateColor('GREEN', colorsObj));
console.log(translateColor('BLUE', colorsObj));