export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    logIn() {
        console.log(`Log in whith your user: ${this.email}`)
    }

    logOut() {
        console.log(`Goodbye: ${this.email}`)
    }
}