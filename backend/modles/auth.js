const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  mobile: {
    type: Number
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
  Comments: [{
    type: Object
  }],
  likes: [{
    type: Object
  }],
  dislikes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
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

const User = mongoose.model('User', userSchema);
User.createIndexes();

module.exports = User;
