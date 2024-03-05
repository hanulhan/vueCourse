
// So
//import userCreator from './5-export.js';
//import {printName as printFirstName, printAge as printDOB} from './5-export.js';

// oder os
import userCreator, {
  printName as printFirstName,
  printAge as printDOB
} from './5-export.js';


console.log(userCreator());

console.log(printFirstName());

console.log(printDOB());

