"use strict";



////////////////////// Reverse a String ///////////////////////////

// let userInput = prompt("Enter a string to be reversed-");

// console.log(reverseString(userInput));

// function reverseString(userString) {
//     let reversedString = "";

//     for (let i = userString.length - 1; i >= 0; i--) {
//         reversedString += userString[i];
//     }

//     return reversedString;
// }


////////////////////// Capatilize Letter ///////////////////////////

let userInput = prompt("Enter a string to be capatilized");

console.log(capatilizeString(userInput));

function capatilizeString(userString) {

    let newString = "";

    for (let i = 0; i < userString.length; i++) {
        if (userString[i] == userString[0]) {
            newString += userString[i].toUpperCase();
        }
        else if (userString[i - 1] == " ") {
            newString += userString[i].toUpperCase();
        }
        else {
            newString += userString[i];
        }
    }

    return newString;
}

