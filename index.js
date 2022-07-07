// String, Number, Boolean

var x = 5;

// 1) [5][][][][][][][][]
//    1 2 3 4 ....

x = x - '5';

5 - '5';
5 - Number('5');
5 - 5;
0;

console.log('x', x);

var y = true;

y = y + false;
true + false;
Number(true) + Number(false);
1 + 0;
1;

// 5 + 5 - 23 * 8 / 34
// 5 + 5 - 184 / 34
// 5.411764705882353

// if (x && y || !z)

console.log('y', y);

// TYPE COERCION
