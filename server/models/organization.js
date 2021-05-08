const mongoose = require("mongoose");


const organizationSchema = mongoose.Schema({

    name: {type: String, required: true},
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive'],
        default: "active"
    }
})

module.exports = mongoose.model("Organization", organizationSchema);