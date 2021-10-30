export const User1 = ({ name, email }) => ({
  logIn: () => console.log(`Log in whith your user: ${email}`),
  logOut: () => console.log(`Goodbye: ${email}`)
})