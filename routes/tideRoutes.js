const express = require('express');
const tideController = require('../controllers/tideController');
const router = express.Router();

router.post('/tide', tideController.createTide);  

router.get('/tides', tideController.getAllTides); 

router.get('/tide/:id', tideController.getTideById);

router.put('/tide/:id', tideController.updateTide);

router.delete('/tide/:id', tideController.deleteTide);


module.exports = router;

