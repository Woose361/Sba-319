const express = require('express');
const shoreController =  require('../controllers/shoreController');
const router = express.Router();

router.post('/shore', shoreController.createShore);  

router.get('/shores', shoreController.getAllShores); 

router.get('/shore/:id', shoreController.getShoreById);

router.put('/shore/:id', shoreController.updateShore);

router.delete('/shore/:id', shoreController.deleteShore);

module.exports = router;
