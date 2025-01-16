const express = require('express');
const waveController = require('../controllers/waveController');
const router = express.Router();

router.post('/wave', waveController.createWave);  

router.get('/waves', waveController.getAllWaves); 

router.get('/wave/:id', waveController.getWaveById);

router.put('/wave/:id', waveController.updateWave);

router.delete('/wave/:id', waveController.deleteWave);

module.exports = router;
