const getPersonalProjectModel = (sequelize,{DataTypes})=> {
    const Project = sequelize.define("Project", {
  proyect_id: {
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
  project_name: {
    type: DataTypes.STRING(100),
  },
  project_description: {
    type: DataTypes.TEXT,
  },
  project_image: {
    type: DataTypes.STRING(255),
  },
  project_link: {
    type: DataTypes.STRING(255),
  },
});

return Project;
};

module.exports = getPersonalProjectModel;