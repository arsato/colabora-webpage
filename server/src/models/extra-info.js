const getExtraInfoModel = (sequelize, { DataTypes }) => {
    const ExtraInfo = sequelize.define("extra_info", {
      extraInfoId: {
        field: "extra_info_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      github: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      publicId: {
        field: "public_id",
        type: DataTypes.STRING,
        allowNull: true,
      },
      secureUrl: {
        field: "secure_url",
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
  
    return ExtraInfo;
  };
  
  module.exports = getExtraInfoModel;
  