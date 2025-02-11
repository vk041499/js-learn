const userEmail = []

if (userEmail) {
    console.log('Got user email');
}
else {
    console.log('No user email');
}

// falsy Values

// 0    -0    NaN    null    undefined    ""    false   BigInt 0n

// truthy Values

// "0"    " "    []    {}    function(){}    1    2    3    true    BigInt 1n "false"

// if (userEmail.length === 0){
//     console.log('Array is empty');
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log('Object is empty');
}

// Nullish Coalescing Operator  ?? : null undefined

 let val1;

 //val1 = 5 ?? 10;
 //val1 = null ?? 10;
 //val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;
 console.log(val1);

 // ternianry operator

 // condition ? true : false

 const iceTeaPrice = 100;

 iceTeaPrice >= 100 ? console.log('I will buy ice tea') : console.log('I will not buy ice tea');