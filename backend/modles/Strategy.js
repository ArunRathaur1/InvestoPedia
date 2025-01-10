const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
  Strategy_name: {
    type: String,
    required: true
  },
  Users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Strategy = mongoose.model('Strategy', strategySchema);

module.exports = Strategy;
