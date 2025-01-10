const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    id: {
      type: String
    },
    alternateMobile: {
      type: Number
    },
    dateOfBirth: {
      type: Date
    },
    address: {
      type: String
    },
    securityQuestion: {
      type: String
    },
    securityAnswer: {
      type: String
    },
    profileImage: {
      type: String
    }
  });
  
  const AdminData = mongoose.model('AdminData', userSchema);
  AdminData.createIndexes();
  
  module.exports = AdminData;
  