const express = require('express');
const router = express.Router();

const blogArticleController = require('../controllers/BlogArticleController');

router.get('/blog_articles', blogArticleController.getBlogArticles);
router.get('/blog_articles/:id', blogArticleController.getBlogArticleById);
router.post('/blog_articles', blogArticleController.createBlogArticle);
router.put('/blog_articles/:id', blogArticleController.updateBlogArticle);
router.delete('/blog_articles/:id', blogArticleController.deleteBlogArticle);

module.exports = router;
