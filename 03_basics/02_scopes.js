let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 40;
    const b = 50;
    var c = 60;
    // console.log("Inside the block",a,b,c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Vishal";

    function two(){
        const website = "google.com";
        console.log(username);
    }
    //console.log(website);
    two();
}
// one();

if(true){
    const username = "Vishal";
    if(username==="Vishal"){
        const website = "google.com";
        //console.log(username + " " + website);
    }
    //console.log(website);
}

console.log(addOne(10));

function addOne(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(20));
