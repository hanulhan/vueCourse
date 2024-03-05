let item = ['Egg', 0.25, 12];

//let name = item[0];
//let price = item[1];
//let quantity = item[2];

/*
Rewrite the code below to use array destructuring instead of assigning each value to a variable
*/
let [name, price, quantity] = item;
console.log("Erste Aufgabe: ", name, price, quantity);

/*
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/
function mergeObjects(a, b) {
  return  { ...a, ...b };
}


const a = ['Hallo', 'World'];
const b = ['Prima', 'Klima'];

const y = mergeObjects({a:1, b:2}, {c:3, d:4});

console.log("Merged Objects: ", y);
