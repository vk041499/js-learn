function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");

}

//sayMyName();

// function addTwoNumbers(a, b){       //while defining the function we are using parameters .
//     console.log(a + b);
// }
//addTwoNumbers(10, 20);                //while calling the function we are using arguments.

function addTwoNumbers(a, b){  
     //while defining the function we are using parameters .
    // let result = a + b;    
    // return result;
    return a + b;
}

const result = addTwoNumbers(10, 20);

//console.log("Results of sum be:",result); //undefined

function loginUserMessage(username = "Sam"){

    if(!username){
        console.log("Please provide a username");
        return
    }
    return `Welcome ${username}`;
}

// console.log(loginUserMessage("Vishal"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500))

const user = {
    username: "Vishal",
    prices: 100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);
 handleObject({ 
    username: "Vishal",
    price: 1000
    });

const myNewArray = [200, 300, 400, 5000];

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 200, 300, 400, 500]));