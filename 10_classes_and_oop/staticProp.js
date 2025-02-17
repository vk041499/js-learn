class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `12345`
    }

}

const vishal = new User('vishal')
// console.log(vishal.createId()) 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const student = new Teacher("mantu","mantu@gmail.com")
// student.logMe();
console.log(student.createId());
