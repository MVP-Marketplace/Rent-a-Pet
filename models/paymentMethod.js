const mongoose = require("mongoose");


const PaymentMethodSchema = mongoose.Schema({

    user: 
        {
            type: mongoose.Schema.ObjectId, 
            ref: 'User',
            required: [true, 'Payment method must be associated with a user']
        },
    card_number: {type: Number, required: true},
    expiration_date: {type: String, required: true},
    CVV: {type: Number, required: true},
    billing_zipcode: {type: String, required: true},
    status: {type: String, required: true, default: "inactive"}
})

module.exports = mongoose.model("PaymentMethod", PaymentMethodSchema);