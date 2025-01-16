const mongoose = require('mongoose');

const tideSchema = new mongoose.Schema({
    tideLevel: { type: String, required: true },
    time: { type: Date, required: true },
});

const Tide = mongoose.model('Tide', tideSchema);

module.exports = Tide;

