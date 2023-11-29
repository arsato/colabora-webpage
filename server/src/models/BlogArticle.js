const getBlogArticleModel = (sequelize,{DataTypes})=> {
    const BlogArticle = sequelize.define("BlogArticle", {
  article_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  article_title: {
    type: DataTypes.STRING(200),
  },
  article_photo: {
    type: DataTypes.STRING(255),
  },
  article_content: {
    type: DataTypes.TEXT,
  },
  comments: {
    type: DataTypes.TEXT,
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
  },
});

return BlogArticle;
};

module.exports = getBlogArticleModel;
