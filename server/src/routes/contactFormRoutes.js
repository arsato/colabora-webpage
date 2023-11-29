const express = require('express');
const router = express.Router();

const contactFormController = require('../controllers/ContactFormController');

router.get('/contact_forms', contactFormController.getContactForms);
router.get('/contact_forms/:id', contactFormController.getContactFormById);
router.post('/contact_forms', contactFormController.createContactForm);
router.put('/contact_forms/:id', contactFormController.updateContactForm);
router.delete('/contact_forms/:id', contactFormController.deleteContactForm);

module.exports = router;
