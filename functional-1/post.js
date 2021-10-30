export const Post = ({ user, id, content, likes }) => ({
  checkLike: () => console.log('Like in this post'),
  delete: () => console.log('Delete this post'),
})

const post = Post({ user: 'John', id: 1, content: 'Hello World', likes: 0 })
post.checkLike()