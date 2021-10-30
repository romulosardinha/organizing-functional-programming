export class Post {
    constructor(user, id, content, likes) {
        this.user = user
        this.id = id;
        this.content = content;
        this.likes = likes;
    }

    checkLike() {
        console.log('Like in this post')
    }

    delete() {
        console.log('Delete this post')
    }
}

const post = new Post('John', '1', 'Hello World', '10');
post.checkLike();