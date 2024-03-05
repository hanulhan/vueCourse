/*
In the file util.js do the following:

Create a transformToObjects function that transforms a list of numbers into a list of JavaScript objects.
*/

const input= [1, 2, 3];


// Mein Ansatz, geht so nicht
//const obj = input.map( i => {return 'val': i});

// Lösung
function transformToObjects(numbers) {
    console.log(numbers.map(num => ({val: num})))
}




//const transformToObjects= (arr) => arr.map(element => arr = {val:element});


const obj= transformToObjects(input);
//console.log(obj);