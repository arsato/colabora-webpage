const getBlogModel = (sequelize, { DataTypes }) => {
    const Blog = sequelize.define("blog", {
      blogId: {
        field: "blog_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    return Blog;
  };
  
  module.exports = getBlogModel;
  