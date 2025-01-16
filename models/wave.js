const mongoose = require('mongoose');

const waveSchema = new mongoose.Schema({
    waveHeight: { type: Number, required: true },
    time: { type: Date, required: true },
});

const Wave = mongoose.model('Wave', waveSchema);

module.exports = Wave;
