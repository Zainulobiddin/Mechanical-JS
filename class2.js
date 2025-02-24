// 3
// function removeDuplicates(arr) {
//   return arr.filter((element, index) => arr.indexOf(element) === index);
// }
// console.log(removeDuplicates([1, 4, 5, 1, 2, 2, 3, 4, 4]));
// console.log(removeDuplicates([2,3,5,6]));

// 4
// function removeNegatives(arr) {
//     return arr.filter((element) => element > 0)
// }
// console.log(removeNegatives([-1, 2, -3, 4, -5]));
// console.log(removeNegatives([-12,-32,-4,-7]));


// 5
// function calculateAverage(arr) {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element
//     });
//     return ~~(sum/arr.length)
// }
// console.log(calculateAverage([2, 4, 6, 8, 10]));
// console.log(calculateAverage([1, 2, 3, 4, 5]));


// 6
// let fruits = ["apple", "banana", "grapes", "mango", "orange"]

// function filterItems(arr, quare) {
//     return arr.filter((el) => el.toLowerCase().includes(quare.toLowerCase()))
// }
// console.log(filterItems(fruits, 'ap'));
// console.log(filterItems(fruits, 'an'));
// console.log(filterItems(fruits, 's'));


// 8
// function sumArray(arr) {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element
//     });
//     return sum
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));


// 9
// function arrayValuesTypes(arr) {
//     return arr.map((element) => typeof element)
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));
// console.log(arrayValuesTypes(["214", true, false, 2.15, [], null]));
// console.log(arrayValuesTypes([21.1, "float", "array", ["I’m array"], true, 214]));


// 10
// function wordLengths(arr) {
//     return arr.map((element) => element.length)
// }
// console.log(wordLengths(["hello", "world"]));
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the"]));


// 12
// function invertArray(arr) {
//     return arr.map((element) => element*(-1))
// }
// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));

// 13
// function getMultipliedArr(arr) {
//     return arr.map((element) => element*2)
// }
// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));


// 14

// function sumFive(arr) {
//     let sum = 0
//     arr.forEach(element => {
//       if (element > 5) sum += element
//     });
//     return sum
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));


//  15

// function filterArray(arr) {
//     return arr.filter((element) => typeof(element) === 'number')
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
// console.log(filterArray(["Nothing", "here"]));

