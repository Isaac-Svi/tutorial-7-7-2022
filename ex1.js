const x = 5;
const y = false;
const z = 'asdfa';

console.log(x || (y && z));

// ! && ||

5 || (false && 'asdfa');

false && 'asdfa';
false && Boolean('asdfa');
false && true;
false;

5 || false;
Boolean(5) || false;
true || false;
true;

5;

// TRUTHY
// everything else

// FALSEY
// undefined, null, 0, ''
