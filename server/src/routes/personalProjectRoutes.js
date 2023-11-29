const express = require('express');
const router = express.Router();

const personalProjectController = require('../controllers/PersonalProjectController');

router.get('/personal_projects', personalProjectController.getPersonalProjects);
router.get('/personal_projects/:id', personalProjectController.getPersonalProjectById);
router.post('/personal_projects', personalProjectController.createPersonalProject);
router.put('/personal_projects/:id', personalProjectController.updatePersonalProject);
router.delete('/personal_projects/:id', personalProjectController.deletePersonalProject);

module.exports = router;