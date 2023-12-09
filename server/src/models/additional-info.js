const getAdditionalInfoModel = (sequelize, { DataTypes }) => {
    const AdditionalInfo = sequelize.define("additional_info", {
      additionalInfoId: {
        field: "additional_info_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
  
    return AdditionalInfo;
  };
  
  module.exports = getAdditionalInfoModel;
  