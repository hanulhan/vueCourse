

function double(i) {
  return 2 * i;
}

function transform(number, callback)  {

  return callback(number);
}

const ergebnis= 

console.log("Ergebnis 1: " + transform(10, double));


// Fat-arrow Function Schreibweise
const callFunc= (value, func) => {  return func(value) };

// Hier kann man verschiedene Sachen weglassen, weil nur ein Wert returned wird
const callFunc2= (value, func) => func(value);

console.log("Ergebnis 2: " + callFunc(10, double));
console.log("Ergebnis 3: " + callFunc2(10, double));


const getSettings = () => {
  return {
  language: 'de',
  region: 'eu'}
}
