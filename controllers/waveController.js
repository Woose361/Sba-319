const Wave = require('../models/wave');

const createWave = async (req, res) => {
  try {
    const wave = new Wave(req.body);
    await wave.save();
    res.status(201).json(wave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllWaves = async (req, res) => {
  try {
    const waves = await Wave.find();
    res.json(waves);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWaveById = async (req, res) => {
  try {
      const wave = await Wave.findById(req.params.id);
      if (!wave) return res.status(404).json({ message: 'Wave not found' });
      res.json(wave);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

const updateWave = async (req, res) => {
  try {
      const wave = await Wave.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!wave) return res.status(404).json({ message: 'Wave not found' });
      res.json(wave);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

const deleteWave = async (req, res) => {
  try {
      const wave = await Wave.findByIdAndDelete(req.params.id);
      if (!wave) return res.status(404).json({ message: 'Wave not found' });
      res.json({ message: 'Wave deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

module.exports = { createWave, getAllWaves, getWaveById, updateWave, deleteWave };
