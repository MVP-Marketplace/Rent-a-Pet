const mongoose = require("mongoose");


const taskSchema = mongoose.Schema({

    name: {type: String, required: true},
    description: {type: String, required: true},
    pet_id: {type: String, required: true}
})

module.exports = mongoose.model("Task", taskSchema);