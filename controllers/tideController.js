const Tide = require('../models/tide');

const createTide = async (req, res) => {
  try {
    const shore = new Shore(req.body);
    await shore.save();
    res.status(201).json(shore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTideById = async (req, res) => {
  try {
    const tide = new Tide(req.body);
    await tide.save();
    res.status(201).json(tide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllTides = async (req, res) => {
  try {
    const tides = await Tide.find().populate('shoreId');
    res.json(tides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTide = async (req, res) => {
  try {
      const tide = await Tide.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!tide) return res.status(404).json({ message: 'Tide not found' });
      res.json(tide);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};
const deleteTide = async (req, res) => {
  try {
      const tide = await Tide.findByIdAndDelete(req.params.id);
      if (!tide) return res.status(404).json({ message: 'Tide not found' });
      res.json({ message: 'Tide deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

module.exports = { createTide, getAllTides, getTideById, updateTide, deleteTide };