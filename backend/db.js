const mongoose = require("mongoose");
require('dotenv').config();
const uri=process.env.MONGOURI;
const connect = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to Mongoose");
};

module.exports = connect;
