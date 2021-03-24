const mongoose = require("mongoose");


const userSchema = mongoose.Schema({

    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email_address: {type: String, required: true},
    user_type: {type: String, required: true},
    status: {type: String, required: true, default: "inactive"}
})

module.exports = mongoose.model("User", userSchema);