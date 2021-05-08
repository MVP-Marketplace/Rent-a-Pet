const mongoose = require("mongoose");


const animalSchema = mongoose.Schema({

    name: {type: String, required: true},
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive'],
        default: "active"
    }
})

module.exports = mongoose.model("Animal", animalSchema);