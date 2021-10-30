export const User1 = ({ email }) => ({
  logIn: () => console.log(`Log in whith your user: ${email}`),
  logOut: () => console.log(`Goodbye: ${email}`)
})

const user = User1({ email: 'Jhon@c.com' })
user.logIn()
user.logOut()