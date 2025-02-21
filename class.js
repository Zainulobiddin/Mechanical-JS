// #Task1.
// A Write function that takes multiple arrays and returns anew array containing the elements of the array.

// function mergeArrays(...arrays) {
//     return [].concat(...arrays)
// }
// console.log(mergeArrays([1, 2], [3, 4]));
// console.log(mergeArrays([15, 4], [2, 3],[5,7]));


// #Task2.
// Write a function that takes an array and an element, and then returns the index of that element in the array. If the element is not found, return -1.

// function findIndex(arr, element) {
//     return arr.indexOf(element)
// }
// console.log(findIndex([1, 2, 3], 2));
// console.log(findIndex([1, 2, 3], 5));
// console.log(findIndex([3,4,5,3,1,5,5,5,7,6], 5));

// #Task3.
// Write a function that takes an array and returns a new array without duplicate elements.

// function removeDuplicates(array) {
//     let result = []
//     for (const item of array) {
//         if (!result.includes(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// console.log(removeDuplicates([2,3,5,6,6,2,4]));

// #Task4.
// Write a function that removes all negative numbers from an array.

// function removeNegatives(array) {
//     let res = []
//     for (const item of array) {
//         if (item>-1) {
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(removeNegatives([-1, 2, -3, 4, -5, -9, 0]));


// 5
//  Implement a function calculateAverage that takes an array of numbers and returns the average.

// function calculateAverage(arr) {
//     let sum = 0
//     for (const item of arr) {
//         sum += item
//     }
//     return ~~(sum/arr.length)
// }
// console.log(calculateAverage([2,4,6,8,10]));
// console.log(calculateAverage([1, 2, 3, 4, 5]));


// 6
// Implement a function isPalindromeArray that takesan array and returns true if the array is a palindrome
// (read the same from left to right as from right to left), and false otherwise.

// function isPalindromeArray(array) {
//     let newArr = array.join(',')
//     // console.log(newArr.split(',').reverse().join());
//     // console.log( array.toString(''));
//     return (newArr.split(',').reverse().join() === array.toString(''));
// }
// console.log(isPalindromeArray([1, 2, 3, 2, 1]));
// console.log(isPalindromeArray([2, 1, 4, 7, 1]));


// 7
// Create a function that takes two numbers num1, num2, and an
// array arrand returns an array containing all the numbers in arrgreater than num1 and less than num2.

// function arrBetween(num1, num2, arrays) {
//     let newArray = []
//     for (const element of arrays) {
//         if (element > num1 && element < num2)  {
//             newArray.push(element)
//         }
//     }
//     return newArray
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));



// 8

// function sumArray(arrays) {
//     let sum = 0
//     for (const item of arrays) {
//         sum += item
//     }
//     return sum
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([1, 0, -1]));
// console.log(sumArray([0, 4, 8, 12]));


// 9
// Create a function that takes an array and returns the types of values (data types) in a new array.

// function arrayValuesTypes(array) {
//     let arr2 = []
//     for (const item of array) {
//         arr2.push(typeof item)
//     }
//     return arr2
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));
// console.log(arrayValuesTypes(["214", true, false, 2.15, [], null]));
// console.log(arrayValuesTypes([21.1, "float", "array", ["I’m array"], true, 214]));

// 10
// Create a function that takes an array of words and transforms it into an array of each word's length.

// function wordLengths(arrayWords) {
//     let lengthWord = []
//     for (const item of arrayWords) {
//        lengthWord.push(item.length)
//     }
//     return lengthWord
// }
// console.log(wordLengths(["hello", "world"]));
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the"]));


// 11
// Create a function that takes an array of two numbers and checks if
// the square root of the first number is equal to the cube root of the second number.

// function checkSquareAndCube(arr) {
//     let squareFirstElem = Math.sqrt(arr[0])
//     return (Math.pow(squareFirstElem,3) === arr[1])
// }
// console.log(checkSquareAndCube([4, 8]));
// console.log(checkSquareAndCube([16, 48]));
// console.log(checkSquareAndCube([9, 27]));


// 12
//  Create a function that takes an array of numbers arrand returns an inverted array
// function invertArray(arr) {
//     let invertedElementsOfArray = []
//     for (const item of arr) {
//         invertedElementsOfArray.push(item*(-1))
//     }
//     return invertedElementsOfArray
// }
// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));


// 13
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// function getMultipliedArr(array) {
//     let elementMultipleTwo = []
//     for (const item of array) {
//         elementMultipleTwo.push(item*2)
//     }
//     return elementMultipleTwo
// }
// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));


// 14
//  Write a function that returns the sum of elements greater than 5,
// in the given array . Find all the elements greater than 5, not the elements greater than or equal to 5.

// function sumFive(arr) {
//     let sum = 0
//     for (const item of arr) {
//         if (item > 5) {
//             sum += item
//         }
//     }
//     return sum
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));


// 15
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// function filterArray(array) {
//     let res = []
//     for (const element of array) {
//        if (typeof(element) === 'number' ) {
//         res.push(element)
//        }
//     }
//     return res
    
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
// console.log(filterArray(["Nothing", "here"]));



