// Immediately Invoked Function Expression (IIFE)

(function print(){
    // named iife function 
    console.log(`DB CONNECTED`);

})();

( (name)=> {
    console.log(`DB CONNECTED TEST ${name}`);

})("Vishal"); 