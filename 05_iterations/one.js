// for loop iteration

for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
    
}
let myArray = ["flash", "arrow", "superman", "batman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
    
}

// for (let index = 1; index <=20; index++) {
// if (index == 5){
//     console.log("We have reached 5");
//     break;    
// }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <=20; index++) {
    if (index == 5){
        console.log("We have reached 5");
        continue;   
    }
        console.log(`Value of i is ${index}`);
        
    }