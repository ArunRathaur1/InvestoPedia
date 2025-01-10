const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
 email:{
    type:String,
    require:true,
 },
 password:{
    type:String,
    require:true
 }
  }
);
const login=mongoose.model('notes', notesSchema);
module.exports=login;