//const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// const values = coding.forEach( (items) => {
//     //console.log(items);
//     return items;
// })

// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter( (num) => num > 5 ) 
// console.log(newNums); // [ 6, 7, 8, 9, 10 ]
 
// const newNums = myNums.filter( (num) => {
//     return num > 5;
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 5) {
//         newNums.push(num);
//     }
// })


// console.log(newNums); 


const books = [
    {
        title : 'Book1',
        author : 'Author1',
        price : 100
    },
    {
        title : 'Book2',
        author : 'Author2',
        price : 200
    },
    {
        title : 'Book3',
        author : 'Author3',
        price : 300,
    
    },
    {
        title : 'Book4',
        author : 'Author4',
        price : 400
    },
    {
        title : 'Book5',
        author : 'Author5',
        price : 500
    }
];

let  userBooks = books.filter( (book) => book.price > 300);

userBooks = books.filter ( (book) => { return book.price >100 && book.price < 300});

console.log(userBooks);