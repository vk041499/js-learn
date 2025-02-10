// singletons and literals

//Object.create

// objects literals we are going to study here..

const mySym = Symbol("key1");

const JsUser = {
    name: "Vishal",
    "full_name ": "Vishal Kumar",
    age: 25,
    [mySym]: "mySymbolkey1",
    email: "vishal@google.com",
    location: "Hyderabad",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full_name "]);
// console.log(JsUser[mySym]);
// console.log(JsUser["location"]);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["lastLoginDays"]);

JsUser.email = "vk@yahoo.com";
//console.log(JsUser.email);
//Object.freeze(JsUser)

JsUser.email = "vkumar@yahoo.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, Good Morning");
}

JsUser.greetingTwo = function(){
    console.log(`Hello, Good Morning,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

