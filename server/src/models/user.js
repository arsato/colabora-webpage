const getUserModel = (sequelize, { DataTypes }) => {
    const User = sequelize.define("user", {
      userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userRole: {
        field: "user_role",
        type: DataTypes.ENUM("admin", "user"),
        defaultValue: "user",
        allowNull: false,
      },
    });
  
    return User;
  };
  
  module.exports = getUserModel;
  