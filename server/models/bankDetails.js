const mongoose = require("mongoose");


const BankingDetailSchema = mongoose.Schema({

    user: 
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User', 
            required: [true, 'Banking Detail must belong to a user']
        },
    routing_number: {type: String, required: true},
    bank_name: {type: String, required: true},
    account_number: {type: String, required: true},
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive'],
        default: "inactive"
    }
})

module.exports = mongoose.model("BankDetail", BankingDetailSchema);