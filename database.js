const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://divyanshu:divyanshu@cluster0.57fvbtj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const stockSchema = new mongoose.Schema({
  SC_CODE: String,
  SC_NAME: String,
  SC_GROUP: String,
  SC_TYPE: String,
  OPEN: Number,
  HIGH: Number,
  LOW: Number,
  CLOSE: Number,
  LAST: Number,
  PREVCLOSE: Number,
  NO_TRADES: Number,
  NO_OF_SHRS: Number,
  NET_TURNOV: Number,
  TDCLOINDI: Number
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
