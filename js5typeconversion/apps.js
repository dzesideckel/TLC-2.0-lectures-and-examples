// Type conversion: converting between
//   one data type and another

// Type coercion: the JS engine
//   automatically converts
//   the type of avalue
//   to work out and expressoin
console.log(5 + '5');
console.log(typeof (5 + '5'));


// Type casting: You tell the
//    JS engine to convert a
//    value
console.log(Number ('5') + 5);

// Blended example
console.log(Number('5' + 5))

// String concatenation

console.log('5' + '5');

// Type coercion
console.log('5' + 5);

// Testing string equality
console.log(('5' + '5') === ('5' + 5));

let apple;

apple = 0; // false apple

apple = 1; // true apple

apple = -1; // true apple

if (apple)  {
  console.log('Apple is true');
} else  {
  console.log('Apple is false')
}

if (0) {

}