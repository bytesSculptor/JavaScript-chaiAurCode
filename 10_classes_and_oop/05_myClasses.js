// class Users {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     upperCaseName(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new Users('chai', 'chai@gmail.com', '12345')

// console.log(chai.encryptPassword());
// console.log(chai.upperCaseName());







// behind the scene


function User(username, email, password) {
    this.username = username
    this.email  = email
    this.password  = password
}


User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

User.prototype.Capitalize = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "12344")

console.log(tea.encryptPassword());
console.log(tea.Capitalize());