const logIn = ({ email }) => console.log(`Log in whith your user: ${email}`)
const logOut = ({ email }) => console.log(`Goodbye: ${email}`)

export const User2 = {
  logIn,
  logOut
}