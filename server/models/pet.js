const mongoose = require("mongoose");


const petSchema = mongoose.Schema({

    name: {type: String, required: true},
    species: {type: String, required: true},
    age: {type: Number},
    owner_id: {type: String, required: true},
    classification: {
        type: String, 
        required: true, 
        enum: ['domestic','exotic', 'farm'],
        default: "domestic"
    },
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive'],
        default: "inactive"
    }
})

module.exports = mongoose.model("Pet", petSchema);