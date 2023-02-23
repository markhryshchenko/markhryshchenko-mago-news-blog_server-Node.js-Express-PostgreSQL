const Router = require('express')
const router = new Router()
const postController = require('../controller/post_controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByLabel)
router.get('/post/:id', postController.getOnePost)
router.get('/posts/', postController.getAllPosts)
router.delete('/post/:id', postController.deletePost)
module.exports = router