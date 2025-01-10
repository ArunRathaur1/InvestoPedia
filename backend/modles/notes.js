const mongoose = require('mongoose');
const { Schema } = mongoose;

const notesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' // Reference to the 'users' collection
    },
    title: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;
