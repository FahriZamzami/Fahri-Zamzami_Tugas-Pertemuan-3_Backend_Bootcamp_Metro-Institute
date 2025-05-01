const express = require('express');
const router = express.Router();
const operatorController = require('../controllers/operatorInfo.controller')

router.get('/operatorinfo', operatorController.listOperator);
router.post('/operatorinfo', operatorController.addOperator);
router.put('/operatorinfo/:id', operatorController.updateOperator);
router.delete('/operatorinfo/:id', operatorController.deleteOperator);
router.get('/operatorinfo/:id', operatorController.detailOperator);

const classController = require('../controllers/operatorClass.controller')

router.get('/operatorclass', classController.listClass);
router.post('/operatorclass', classController.addClass);
router.put('/operatorclass/:id', classController.updateClass);
router.delete('/operatorclass/:id', classController.deleteClass);
router.get('/operatorclass/:id', classController.detailClass);

module.exports = router;