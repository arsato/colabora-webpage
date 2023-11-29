const Project = require('../models/PersonalProject');

const getPersonalProjects = async (req, res) => {
  try {
    const personalProjects = await Project.findAll();
    res.json(personalProjects);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los proyectos personales.');
  }
};

const getPersonalProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const personalProject = await Project.findByPk(id);
    if (!personalProject) {
      return res.status(404).send('Proyecto personal no encontrado');
    }
    res.json(personalProject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el proyecto personal.');
  }
};

const createPersonalProject = async (req, res) => {
  const { user_id, project_name, project_description, project_image, project_link } = req.body;
  try {
    const personalProject = await Project.create({
      user_id,
      project_name,
      project_description,
      project_image,
      project_link,
    });
    res.json(personalProject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el proyecto personal.');
  }
};

const updatePersonalProject = async (req, res) => {
  const { id } = req.params;
  const { user_id, project_name, project_description, project_image, project_link } = req.body;
  try {
    const personalProject = await Project.findByPk(id);
    if (!personalProject) {
      return res.status(404).send('Proyecto personal no encontrado');
    }
    await personalProject.update({
      user_id,
      project_name,
      project_description,
      project_image,
      project_link,
    });
    res.json(personalProject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el proyecto personal.');
  }
};

const deletePersonalProject = async (req, res) => {
  const { id } = req.params;
  try {
    const personalProject = await Project.findByPk(id);
    if (!personalProject) {
      return res.status(404).send('Proyecto personal no encontrado');
    }
    await personalProject.destroy();
    res.json({ message: 'Proyecto personal eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el proyecto personal.');
  }
};

module.exports = {
  getPersonalProjects,
  getPersonalProjectById,
  createPersonalProject,
  updatePersonalProject,
  deletePersonalProject,
};
