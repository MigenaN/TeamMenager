const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    minlength: 3,
    },
position: {type: String, 
required: true},
state: {type: String,
    required: [true, "Status is required"], default: "Undecided"}

}, { timestamps: true });


const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
