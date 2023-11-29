const getGeneralInformationModel = (sequelize, { DataTypes }) => {

    const GeneralInformationPage = sequelize.define('GeneralInformationPage', {
    info_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  site_name: {
    type: DataTypes.STRING(100),
  },
  general_description: {
    type: DataTypes.TEXT,
  },
  contact_info: {
    type: DataTypes.TEXT,
  },
  datestamp: {
    type: DataTypes.DATE,
  },
});

return GeneralInformationPage;
};

module.exports = getGeneralInformationModel;