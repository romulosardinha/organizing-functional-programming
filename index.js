import { Post } from './class/post.js';
import { User } from './class/user.js'
import { Post1 } from './functional-1/post.js';
import { User1 } from './functional-1/user.js';
import { Post2 } from './functional-2/post.js';
import { User2 } from './functional-2/user.js';

// class
console.log('')
console.log('--- class')

const user = new User('Jhon', 'Jhon@c.com')
user.logIn() // Log in whith your user: Jhon@c.com
user.logOut() // Goodbye: Jhon@c.com

const post = new Post('Jhon@c.com', 2, 'Helo World', 20)
post.checkLike() // Like in this post

// functional-1
console.log('')
console.log('--- functional 1')

const user1 = User1({ name: 'Jhon', email: 'Jhon@c.com' })
user1.logIn() // Log in whith your user
user1.logOut() // Goodbye Jhon@c.com

const post1 = Post1({ user: 'Jhon', id: 2, content: 'Helo World', likes: 20 })
post.checkLike() // Like in this post

// functional-2
console.log('')
console.log('--- functional 2')

const user2 = User2
user2.logIn({ name: 'Jhon', email: 'Jhon@c.com' }) // Log in whith your user
user2.logOut({ name: 'Jhon', email: 'Jhon@c.com' }) // Goodbye

const post2 = Post2
post2.checkLike({ user: 'Jhon', id: 2, content: 'Helo World', likes: 20 }) // Like in this post

console.log('')