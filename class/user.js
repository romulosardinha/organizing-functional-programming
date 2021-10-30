export class User {
    constructor(email) {
        this.email = email;
    }

    logIn() {
        console.log(`Log in whith your user: ${this.email}`)
    }

    logOut() {
        console.log(`Goodbye: ${this.email}`)
    }
}

const user = new User('Jhon@c.com')
user.logIn()
user.logOut()