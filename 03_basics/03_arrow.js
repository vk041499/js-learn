const user = {
    username: "Vishal",
    prices: 100,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, to this website` );
        //console.log(this);
    }
}

// user.welcomeMessage(); //Welcome Vishal, to this website
// user.username = "Vishal Kumar";

// user.welcomeMessage(); //Welcome Vishal Kumar, to this website

//console.log(this);

// function chai(){
//     let username = "Vishal";

//     console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "Vishal";

//     console.log(this.username);
// }
// chai();

// const chai = () =>{
//     let username = "Vishal";

//     console.log(this.username);
// }
// chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

//const addTwo = (num1,num2) => num1 + num2;

//const addTwo = (num1,num2) => (num1 + num2);

const addTwo = (num1,num2) => ({username: "Vishal"})// using object literals

 console.log(addTwo(10,20));


