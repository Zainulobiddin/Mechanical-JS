// 1
// Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr) {
//     return arr.shift()
// }
// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

// 2
// Given two arguments, return an array which contains these two arguments

// function makePair(...elementsArr) {
//     return [...elementsArr]
// }
// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));


// 3
// Write a function to reverse an array.

// function reverse(arr) {
//     return arr.toReversed()
// }
// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));


// 4
//  Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// function incrementItems(arr) {
//     let result = []
//     for (const element of arr) {
//         result.push(element+1)
//     }
//     return result
// }
// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8]));
// console.log(incrementItems([-1, -2, -3, -4]));


// 5
// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
//     return arr.at(-1)
// }
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// 6
// Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(array) {
//     return array.join('')
// }
// console.log(arrayToString([1,2,3,4,5]));
// console.log(arrayToString(['a', 'b', 'c']));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));


// 7
// Write a function to check if an array contains a particular number.

//  function check(array, element) {
//     return array.includes(element)
//  }
//  console.log(check([1, 2, 3, 4, 5], 3));
//  console.log(check([1, 1, 2, 1, 1], 3));
//  console.log(check([5, 5, 5, 6], 5));
 

// 8
//  Create a function that takes an array and a string as arguments and returns the index of the string.
// function findIndex(array, element) {
//     return array.indexOf(element)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));


// 9
// Create a function to concatenate two integer arrays.

// function concat(arr1, arr2) {
//     return arr1.concat(arr2)
// }
// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


// 10
 // Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

 function toNumberArray(array) {
    let res = []
    for (const element of array) {
        res.push(+element)
    }
    return res
 }
 console.log(toNumberArray(["9.4", "4.2"]));
 console.log(toNumberArray(["91", "44"]));
 console.log(toNumberArray(["9.5", "8.8"]));
 