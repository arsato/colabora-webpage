// controllers/ContactFormController.js
const ContactForm = require('../models/contactForm');

const getContactForms = async (req, res) => {
  try {
    const contactForms = await ContactForm.findAll();
    res.json(contactForms);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los formularios de contacto.');
  }
};

const getContactFormById = async (req, res) => {
  const { id } = req.params;
  try {
    const contactForm = await ContactForm.findByPk(id);
    if (!contactForm) {
      return res.status(404).send('Formulario de contacto no encontrado');
    }
    res.json(contactForm);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el formulario de contacto.');
  }
};

const createContactForm = async (req, res) => {
  const { contact_name, email, phone, inquiry_text, received_timestamp } = req.body;
  try {
    const contactForm = await ContactForm.create({
      contact_name,
      email,
      phone,
      inquiry_text,
      received_timestamp,
    });
    res.json(contactForm);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el formulario de contacto.');
  }
};

const updateContactForm = async (req, res) => {
  const { id } = req.params;
  const { contact_name, email, phone, inquiry_text, received_timestamp } = req.body;
  try {
    const contactForm = await ContactForm.findByPk(id);
    if (!contactForm) {
      return res.status(404).send('Formulario de contacto no encontrado');
    }
    await contactForm.update({
      contact_name,
      email,
      phone,
      inquiry_text,
      received_timestamp,
    });
    res.json(contactForm);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el formulario de contacto.');
  }
};

const deleteContactForm = async (req, res) => {
  const { id } = req.params;
  try {
    const contactForm = await ContactForm.findByPk(id);
    if (!contactForm) {
      return res.status(404).send('Formulario de contacto no encontrado');
    }
    await contactForm.destroy();
    res.json({ message: 'Formulario de contacto eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el formulario de contacto.');
  }
};

module.exports = {
  getContactForms,
  getContactFormById,
  createContactForm,
  updateContactForm,
  deleteContactForm,
};
