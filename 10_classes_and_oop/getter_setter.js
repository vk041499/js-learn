class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        return `${this._password}Vishal`
    }
    set password(value){
        this._password = value
    }
}

const person = new User("person@gmail.com", "Abc123")
console.log(person.password)
console.log(person.email);
