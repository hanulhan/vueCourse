
/*
Write a function compact to remove falsey values from a given array

console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
// [1,2,3,"a","s",34]

console.log(compact([false, NaN, 'e' * 23]));
// []
*/




function compact1(a) {
    
    // Umständlicher weg
    return a.filter((value) => helper(a));

    // Transformation in ein Boolean
    //return a.filter((value) => !!value);
}

function compact2(arr) {
    return arr.filter(Boolean);
}

function helper(value)  {

    console.log("Value: " + value );
    if (value === null){
        console.log("1");
        return true;
    }

    if (value === null){
        console.log("2");
        return true;
    }

    if (value === 0){
        console.log("3");
        return true;
    }

    if (isNaN(value)){
        console.log("4");
        return true;
    }

    if (value === false){
        console.log("5");
        return true;
    }

    return false;

}
//console.log(compact1([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
console.log(compact2([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]));
// [1,2,3,"a","s",34]

//console.log(compact([false, NaN, 'e' * 23]));
// []

