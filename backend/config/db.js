const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('MongoDB is connected');
  });

  connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
  });
};

module.exports = connectDB;
