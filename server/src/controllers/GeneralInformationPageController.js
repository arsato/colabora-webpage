const GeneralInformationPage = require('../models/GeneralInformationPage');

//para obtener la información general de la página no se si requerimos
const getGeneralInfo = async (req, res) => {
  try {
    const generalInfo = await GeneralInformationPage.findAll();
    res.json(generalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la información general de la página.');
  }
};

module.exports = { getGeneralInfo };