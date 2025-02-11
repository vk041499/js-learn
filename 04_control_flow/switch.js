// Description: Switch statement is used to perform different actions based on different conditions.
//  It is similar to if else statement but more readable when there are multiple conditions.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;

// switch (month) { 
//     case 1: "January";
//         console.log("January");
//         break;
//     case 2: "February";
//         console.log("February");
//         break;
//     case 3: "March";
//         console.log("March");
//         break;
//     case 4: "April";    
//         console.log("April");
//         break;

//     default:
//         console.log("default case");
//         break;
// }

const month = "march";
switch (month) {
    case "january":
        console.log("January");
        break;

    case "february":
        console.log("February");
        break;

    case "march":
        console.log("March");
        //break;  

    default:
        console.log("default case");
        break;
}