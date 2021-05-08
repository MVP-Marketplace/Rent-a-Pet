const mongoose = require("mongoose");


const descriptionSchema = mongoose.Schema({

    name: {type: String, required: true},
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive'],
        default: "active"
    }
})

module.exports = mongoose.model("Description", descriptionSchema);