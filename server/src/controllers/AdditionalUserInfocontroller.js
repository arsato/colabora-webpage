const AdditionalUserInfo = require('../models/additionalUserInfo');//me tira error el archivo del models

const getAllAdditionalUserInfo = async (req, res) => {
  try {
    const additionalUserInfo = await AdditionalUserInfo.findAll();
    res.json(additionalUserInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la información adicional del usuario.');
  }
};

const getAdditionalUserInfoById = async (req, res) => {
  const { info_id } = req.params;
  try {
    const additionalUserInfo = await AdditionalUserInfo.findByPk(info_id);
    if (!additionalUserInfo) {
      return res.status(404).send('Información adicional de usuario no encontrada.');
    }
    res.json(additionalUserInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la información adicional del usuario.');
  }
};

const createAdditionalUserInfo = async (req, res) => {
  const { user_id, description, user_photo } = req.body;
  try {
    const newAdditionalUserInfo = await AdditionalUserInfo.create({
      user_id,
      description,
      user_photo,
    });
    res.status(201).json(newAdditionalUserInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la información adicional del usuario.');
  }
};

const updateAdditionalUserInfo = async (req, res) => {
  const { info_id } = req.params;
  const { description, user_photo } = req.body;
  try {
    const additionalUserInfo = await AdditionalUserInfo.findByPk(info_id);
    if (!additionalUserInfo) {
      return res.status(404).send('Información adicional de usuario no encontrada.');
    }

    await additionalUserInfo.update({
      description,
      user_photo,
    });

    res.json(additionalUserInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar la información adicional del usuario.');
  }
};

const deleteAdditionalUserInfo = async (req, res) => {
  const { info_id } = req.params;
  try {
    const additionalUserInfo = await AdditionalUserInfo.findByPk(info_id);
    if (!additionalUserInfo) {
      return res.status(404).send('Información adicional de usuario no encontrada.');
    }

    await additionalUserInfo.destroy();
    res.send('Información adicional de usuario eliminada correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la información adicional del usuario.');
  }
};

module.exports = {
  getAllAdditionalUserInfo,
  getAdditionalUserInfoById,
  createAdditionalUserInfo,
  updateAdditionalUserInfo,
  deleteAdditionalUserInfo,
};
