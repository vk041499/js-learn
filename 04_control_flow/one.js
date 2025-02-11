// we are going to learn about if else statement

// const score = 200;
// if (score > 100) {
//     let power = "fly"
//     console.log(`You have ${power} power`);
// }

// console.log(power); 

const balance = 1000;

//if (balance > 500) console.log("You have enough money"), console.log("You can buy a car");

// if (balance < 500){
//     console.log("You don't have enough money");
// }
// else if (balance <750){
//     console.log("You can buy a bike");
// }
// else if (balance <= 1000){
//     console.log("You can buy a car");
// }
// else{
//     console.log("You can buy a house");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;

if (userLoggedIn && debitCard && loggedInFromGoogle){
    console.log("You can buy a course with google");
}
if (userLoggedIn || debitCard || loggedInFromGoogle){
    console.log("You can buy a course with any of the above");
} 