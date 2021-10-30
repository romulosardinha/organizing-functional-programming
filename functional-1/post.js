export const Post1 = ({ user, id, content, likes }) => ({
  checkLike: () => console.log('Like in this post'),
  delete: () => console.log('Delete this post'),
})