const logIn = ({ email }) => console.log(`Log in whith your user: ${email}`)
const logOut = ({ email }) => console.log(`Goodbye: ${email}`)

export const User = {
  logIn,
  logOut
}

User.logIn({ email: 'Jhon@c.com' })
User.logOut({ email: 'Jhon@c.com' })