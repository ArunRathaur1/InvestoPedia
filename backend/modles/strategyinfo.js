const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
  Strategy_name: {
    type: String,
    required: true
  },
  StrategyDescription: {
    type: Object
  },
  StrategyFilePath:{
    type:String
  },
  image:{
    type:String
  }
});

const StrategyInfo = mongoose.model('StrategyInfo', strategySchema);

module.exports = StrategyInfo;