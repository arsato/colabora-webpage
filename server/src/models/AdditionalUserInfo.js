const getAdditionalUserInfoModel = (sequelize, { DataTypes }) => {
    const AdditionalUserInfo = sequelize.define("additional_user_info", {
      info_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      description: {
        type: DataTypes.TEXT,
      },
      user_photo: {
        type: DataTypes.STRING(255),
      },
    });
  
    return AdditionalUserInfo;
  };
  
  module.exports = getAdditionalUserInfoModel;