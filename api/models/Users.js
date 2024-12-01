const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id : {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required : true
    },
    email : {
        type: String
    },
    age : {
        type: Number,
        min: 0
    },
    country : {
        type: String
    }
});

module.exports = mongoose.model("User", UserSchema);