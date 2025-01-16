const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once("open", () => {
          console.log("connected to mongodb");
        });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        
    }
};

module.exports = connectToDatabase;
