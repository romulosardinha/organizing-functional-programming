import { Post } from './class/post'
import {User} from './user'

// class

const user = new User('Jhon', 'Jhon@c.com')

user.logIn() // Log in whith your user: Jhon@c.com
user.logOut() // Goodbye: Jhon@c.com

const post = new Post('Jhon@c.com', 2, 'Helo World', 20)

post.checkLike() // Like in this post

// functional-1

