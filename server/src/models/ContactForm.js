const getContactFormModel = (sequelize,{DataTypes})=> {
    const ContactForm = sequelize.define("ContactForm", {
  contact_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contact_name: {
    type: DataTypes.STRING(250),
  },
  email: {
    type: DataTypes.STRING(250),
  },
  phone: {
    type: DataTypes.STRING(15),
  },
  inquiry_text: {
    type: DataTypes.TEXT,
  },
  received_timestamp: {
    type: DataTypes.DATE,
  },
});


return ContactForm;
}
;


module.exports = getContactFormModel;