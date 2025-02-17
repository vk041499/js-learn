// let myName = "Vishal      "

// console.log(myName)

let myHeros = ['thor','spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.vishal = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyvishal = function(){
    console.log(`hitesh says hello vishal kumar how are you!`);
    
}


// heroPower.vishal()
// myHeros.vishal()
// myHeros.heyvishal()
// heroPower.heyvishal()

// inheritance....

const User = {
    name: "Mantu",
    email: "mantu@gmail.comm"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);

}
anotherUserName.trueLength()
"Vishal Kumar".trueLength()
"Mantu".trueLength()