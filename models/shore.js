const mongoose = require('mongoose');

const shoreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    length: { type: Number, min: 0 },
});

const Shore = mongoose.model('Shore', shoreSchema);

module.exports = Shore;

