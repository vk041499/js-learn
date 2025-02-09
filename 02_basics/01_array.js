// we are going to learn about arrays in javascript

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myPlayers = ['sachin', 'virat', 'dhoni', 'rohit', 'rahul', 'bumrah'];

const myArr2 = new Array( 5, 6, 7, 8, 9, 10);

//console.log(myArr[4]);

//Array methods

// myArr.push(11);
// myArr.push(12);
// myArr.pop();
// myArr.pop();

// myArr.unshift(99);
// myArr.shift();

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(90));

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice learn

console.log("A " ,myArr);

const myn1 = myArr.slice(1, 4);
console.log("Slice operation of (1,4)" ,myn1)
console.log("B " ,myArr);

const myn2 = myArr.splice(1, 4);
console.log("Splice Operation of (1,4) ",myn2)
console.log("C " ,myArr);



