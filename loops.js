// // 1 - Condition to end the loop
// // 2 - Variable to update the condition
// // 3 - Update the variable

// for (let i = 0; i < 6; i++) {}

// let i = 0;
// while (i < 6) {
//     i++;
// }

// let str = 'a'; // aa, aaa, aaaa, aaaaa
// while (str !== 'aaaaa') {
//     str = str + 'a';
// }

// // for (const a of )

// const arr = [1, 2, 3, true, 'howdy'];
// //           0  1  2    3      4
// arr[0];

// for (let i = 0; i < arr.length; i++) {
//     console.log('loop 1', arr[i]);
// }

// // FOR/OF IS FOR ARRAYS
// for (let element of arr) {
//     console.log('loop 2', element);
// }

// // FOR/IN IS FOR OBJECTS
const obj = {
    a: 5,
    asdf: 'asdasdf',
    hello: true,
};
// obj['a'] arr[3]

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

const arr = ['a', 'b', 'c', 'd'];

// arr = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3: 'd'
// }

for (let key of arr) {
    console.log(key);
}
