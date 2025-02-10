// Singleton we are going to use in the next examples.

// const tinderUser = new Object();  this is singleton object creation
const tinderUser = {};      // this is non singleton object creation

tinderUser.id = "tinder123";
tinderUser.name = "Ramu Kaka";
tinderUser.age = 55;
tinderUser.location = "Mumbai";
tinderUser.isLoggedin = true;

//console.log(tinderUser);

const regularUser = {
    email: "tinderuser@gmail.com",
    fullname:{
        userfullname:{
            firstName: "Ramu",
            lastName: "Kaka",
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};  
const obj4= {7: "seven", 8: "eight", 9: "nine"};

//const obj3 ={obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2,obj4);

const obj3 = {...obj1, ...obj2};
//console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedin"));