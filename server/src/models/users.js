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
        field: "user_first_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        field: "user_last_name",
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_role: {
        field: "user_role",
        type: DataTypes.CHECK("admin", "user"),// SE USA CHECK AHORA EN postgres, no permite el Enum
        defaultValue: "user",
        allowNull: false,
        validate:{
          isIn:[['admin','user']]
      }
      }
    });
   
  
    return User;
  }
;
  
  
  module.exports = getUserModel;
  