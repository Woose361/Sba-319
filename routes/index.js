const express = require('express');
const shoreRoutes = require('./shoreRoutes');
const tideRoutes = require('./tideRoutes');
const waveRoutes = require('./waveRoutes');
const router = express.Router();

router.use(shoreRoutes);
router.use(waveRoutes);
router.use(tideRoutes);


module.exports = router;

