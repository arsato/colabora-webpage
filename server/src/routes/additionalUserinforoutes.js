const express = require('express');
const router = express.Router();

const additionalUserInfoController = require('./controllers/AdditionalUserInfoController');

router.get('/additional_user_info', additionalUserInfoController.getAdditionalUserInfo);
router.get('/additional_user_info/:id', additionalUserInfoController.getAdditionalUserInfoById);
router.post('/additional_user_info', additionalUserInfoController.createAdditionalUserInfo);
router.put('/additional_user_info/:id', additionalUserInfoController.updateAdditionalUserInfo);
router.delete('/additional_user_info/:id', additionalUserInfoController.deleteAdditionalUserInfo);


module.exports = router;