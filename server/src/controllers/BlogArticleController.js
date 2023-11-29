const BlogArticle = require('../models/BlogArticle');

const getBlogArticles = async (req, res) => {
  try {
    const blogArticles = await BlogArticle.findAll();
    res.json(blogArticles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los artículos del blog.');
  }
};

const getBlogArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const blogArticle = await BlogArticle.findByPk(id);
    if (!blogArticle) {
      return res.status(404).send('Artículo del blog no encontrado');
    }
    res.json(blogArticle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el artículo del blog.');
  }
};

const createBlogArticle = async (req, res) => {
  const { user_id, article_title, article_photo, article_content, comments, fecha_publicacion } = req.body;
  try {
    const blogArticle = await BlogArticle.create({
      user_id,
      article_title,
      article_photo,
      article_content,
      comments,
      fecha_publicacion,
    });
    res.json(blogArticle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el artículo del blog.');
  }
};

const updateBlogArticle = async (req, res) => {
  const { id } = req.params;
  const { user_id, article_title, article_photo, article_content, comments, fecha_publicacion } = req.body;
  try {
    const blogArticle = await BlogArticle.findByPk(id);
    if (!blogArticle) {
      return res.status(404).send('Artículo del blog no encontrado');
    }
    await blogArticle.update({
      user_id,
      article_title,
      article_photo,
      article_content,
      comments,
      fecha_publicacion,
    });
    res.json(blogArticle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el artículo del blog.');
  }
};

const deleteBlogArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const blogArticle = await BlogArticle.findByPk(id);
    if (!blogArticle) {
      return res.status(404).send('Artículo del blog no encontrado');
    }
    await blogArticle.destroy();
    res.json({ message: 'Artículo del blog eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el artículo del blog.');
  }
};

module.exports = {
  getBlogArticles,
  getBlogArticleById,
  createBlogArticle,
  updateBlogArticle,
  deleteBlogArticle,
};
