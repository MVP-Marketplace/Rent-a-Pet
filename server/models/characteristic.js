const mongoose = require("mongoose");


const characteristicSchema = mongoose.Schema({

    name: {type: String, required: true},
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive'],
        default: "active"
    }
},
{ timestamps: true },
)

module.exports = mongoose.model("Characteristic", characteristicSchema);