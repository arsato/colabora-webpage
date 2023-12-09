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
      unique: {
        arg: true,
        msg: "Email already in use",
      },
      validate: {
        isEmail: {
          msg: "Please enter a valid mail address",
        },
      },
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

  User.associate = (models) => {
    User.hasOne(models.AdditionalInfo, {
      foreignKey: {
        name: "userId",
        field: "user_id",
        allowNull: false,
      },
    });
  };

  return User;
};

module.exports = getUserModel;
