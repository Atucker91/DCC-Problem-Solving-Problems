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

// let userInput = prompt("Enter a string to be capatilized");

// console.log(capatilizeString(userInput));

// function capatilizeString(userString) {

//     let newString = "";

//     for (let i = 0; i < userString.length; i++) {
//         if (userString[i] == userString[0]) {
//             newString += userString[i].toUpperCase();
//         }
//         else if (userString[i - 1] == " ") {
//             newString += userString[i].toUpperCase();
//         }
//         else {
//             newString += userString[i];
//         }
//     }

//     return newString;
// }


////////////////////// Compress String ///////////////////////////


// let inputString = "aaabbbbbccccaacccbbbaaabbbaaa";

// console.log(compressString(inputString));

// function compressString(userString) {

//     let compressedString = "";
//     let count = 0;

//     for (let i = 0; i < userString.length; i++) {
//         if (userString[i] == userString[i + 1]) {
//             count++;
//         }
//         else if (userString[i] != userString[i + 1]) {
//             count++
//             compressString += count + userString[i];
//             count = 0;
//         }
//     }

//     return compressString;
// }


////////////////////// Happy Numbers ///////////////////////////


// let numToCheck = prompt("Enter number to determine if happy:");

// happyNumber(numToCheck);

// function happyNumber(startingNum) {

//     let arrayStartingNum = startingNum.toString().split("");
//     let sum = 0;
//     let count = 0;

//     while (sum != 1 && startingNum != 1) {

//         sum = 0;

//         for (let i = 0; i < arrayStartingNum.length; i++) {

//             sum += arrayStartingNum[i] * arrayStartingNum[i];
//         }

//         arrayStartingNum = sum.toString().split("");
//         count++;

//         if (sum == startingNum || count == 10) {
//             return console.log("Number is not Happy");
//         }
//     }

//     return console.log("Number is Happy");

// }


////////////////////// Happy Numbers ///////////////////////////


// primeNumber();

// function primeNumber() {

//     for (let i = 2; i < 100; i++) {

//         let primeBool = true;

//         for (let j = 2; j < 100; j++) {
//             if (i % j == 0 && i != j) {
//                 primeBool = false;
//             }
//         }

//         if (primeBool == true) {
//             console.log(i + " Prime");
//         }
//     }
// }


//////////////////////  Fibonacci ///////////////////////////


// let fibArray = [0];

// fibArray[0] = parseInt(prompt("Enter number for start of Fibonacci"));
// console.log(fibonacci(fibArray));

// function fibonacci(array) {
//     for (let i = 0; i < 10; i++) {
//         if (i == 0 || i == 1) {
//             array[1] = array[0];
//         }
//         else {
//             array[i] = array[i - 1] + array[i - 2];
//         }
//     }

//     return array;
// }


//////////////////////  Target sum from two array elements  ///////////////////////////


let array = [5, 17, 77, 50];
let targetNum = 55;

console.log(targetToHit(array, targetNum));

function targetToHit(array, num) {
    let solutionArray = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == num && i != j) {
                solutionArray.push(array[i]);
                solutionArray.push(array[j]);
                return solutionArray;
            }
        }
    }
    return solutionArray;
}

