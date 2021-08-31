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

    for (let i = 0; i < userString.length; i++) {
        if (userString[i] == userString[0]) {
            //change to upper case
        }
        else if (userString[i - 1] == " ") {
            //change to upper case
        }
    }

    return userString;
}

