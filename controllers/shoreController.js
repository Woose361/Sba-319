const Shore = require('../models/shore');


const createShore = async (req, res) => {
  try {
    const shore = new Shore(req.body);
    await shore.save();
    res.status(201).json(shore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllShores = async (req, res) => {
  try {
    const shores = await Shore.find();
    res.json(shores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getShoreById = async (req, res) => {
    try {
        const shore = await Shore.findById(req.params.id); 
        if (!shore) {
            return res.status(404).json({ message: 'Shore not found' });
        }
        res.status(200).json(shore); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateShore = async (req, res) => {
  try {
      const shore = await Shore.findByIdAndUpdate(req.params.id, req.body, {
          new: true,  
          runValidators: true,  
      });
      if (!shore) {
          return res.status(404).json({ message: 'Shore not found' });
      }
      res.status(200).json(shore); 
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

const deleteShore = async (req, res) => {
  try {
      const shore = await Shore.findByIdAndDelete(req.params.id);  
      if (!shore) {
          return res.status(404).json({ message: 'Shore not found' });
      }
      res.status(200).json({ message: 'Shore deleted' });  
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = { createShore, getAllShores, getShoreById, updateShore, deleteShore };
