const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values = myNumbers.map ( (num) => num + 10 );
//console.log(values); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// let newNums = [];

// myNumbers.forEach( (num) => {
    
//     newNums.push(num + 10);
    
    
// })
// console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// chaining map and filter

const newNums = myNumbers
                  .map( (num) => num * 10 )
                  .map( (num) => num + 1)
                  .filter( (num) => num >= 40)

console.log(newNums)