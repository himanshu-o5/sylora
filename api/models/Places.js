const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
    city : {
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    population : {
        type: Number,
        min: 0
    }
})

module.exports = mongoose.model("Place", PlaceSchema);