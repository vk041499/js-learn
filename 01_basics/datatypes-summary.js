// # Primitive Datatypes...

// these are : String , Boolean , Number , null , undefined , Symbol , BigInt



const score = 100
const scoreValue = 100.65
console.log(typeof score);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId);

const bigNumber = 34567899999999999786n
console.log(typeof bigNumber);


// Reference(Non Primitive)...

// Array , Objects , Functions.

const items = ["food","beverages","snacks","drinks"]

let myObj = {
    name: "Vishal Kumar",
    age: "25"
}

const myFunction = function(){
    console.log("this is a Function");
    
}

console.log(typeof items);
console.log(typeof myObj);
console.log(typeof myFunction);


//============================================================

// Stack(Primitive)  and Heap(Non Primitive)

let youtubeName = "animeshblogs"

let anothername = youtubeName
anothername = "pankajblogs"

// console.log(anothername);
// console.log(youtubeName);

let userOne = {
    name: "arvind kumar",
    subject:"physics",
}
let userTwo = userOne

userTwo.name = "mantu kumar"

console.log(userOne.name);
console.log(userTwo.name);

