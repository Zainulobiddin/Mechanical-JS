// let words  = [1,2,3,4,5,6,7,8,9,10]
// let arr = []
// words.forEach(function(element) {
//     if (element % 2 == 0) {
//         arr.push(element)
//     }
// })
// console.log(arr);

//--------- callback
// let add = (a, b) => {
//     return a + b
// }
// let multiplev =  (a, b) => {
//     return a * b
// }
// let solutionLonger = (a, b, callback) => {
//     let solution = callback(a,b)
//     console.log('the solution is ' + solution);
// }
// solutionLonger(2, 4, add);
// solutionLonger(2, 5, multiplev);

//-----------------
// let names = ['ALI', 'saLIM', 'HASAN', 'sAmAndar']

// let newNames = names.map((name) => {
//     return name.at(0).toUpperCase() + name.slice(1).toLocaleLowerCase()
// })
// console.log(newNames);

// ----------
// let months = ["Mar", "Jan", "Feb", "Dec"]
// let add = months.toSorted()
// console.log(add);
// console.log(months);

// let nums = [1,5,6,7,4,32,8,9,0]
// let newNums = nums.sort((a,b) => a-b)
// console.log(newNums);
// console.log(nums);

// let coffee = ["coffee", "water", "23232", "erv;oweifvnwroeb", 1, 2, 3, 4, 5];

// let b = [...coffee];
// console.log(typeof b);

// let f = "hello world world"

// console.log(f.replaceAll("world", 'Salom'));

// let filter = (...arguments) => {
//     return arguments.filter(element => element % 2 === 0)
// }

// console.log(filter(1,5,3,2,6,10,12,14,));

// ------------------
// function great(name, callback) {
//     console.log(`Salom ${name}`);
//     callback()
// }
// function callme() {
//     console.log(`I'm callback function`);
// }
// great('ALi', callme)

// ------------------

// function calc(a, b, callback) {
//     return callback(a, b)
// }
// function add(a, b) {
//  return a+b
// }
// function multiple(a, b) {
//     return a*b
// }

// ------------------

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.map(element => element*2));

// ------------------

// function find(arr) {
//     let arr2 = arr.join()
//     return (arr2.includes('7'));
// }
// console.log(find([1,23]));
// console.log(find([1,27,3]));
// console.log(find([1,11,17]));


// ------------------

function name(arr) {
    let res = arr.toSorted((a, b) => a-b)
    return res
}
console.log(name([2,1,3, 6,4,9,8,7]));
let a = {}


console.log(typeof a);

