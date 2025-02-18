function User(email ,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

    const person = new User("mantu@gmail.com","abc@123")
    console.log(person.email)
    console.log(person.password)