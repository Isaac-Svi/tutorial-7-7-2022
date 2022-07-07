const greeting = 'hello';
const num = 5;
// OPTION 1
console.log('option 1');
if (greeting === 'hello' || num === 5) {
    console.log('hi there');
} else if (greeting === 'howdy' || num === 5) {
    console.log('howdy partner');
}

// OPTION 2
console.log('option 2');
if (greeting === 'hello' || num === 5) {
    console.log('hi there');
}
if (greeting === 'howdy' || num === 5) {
    console.log('howdy partner');
}
if (greeting === 'asdasdf' || num === 5) {
    console.log('asdfasd');
}
