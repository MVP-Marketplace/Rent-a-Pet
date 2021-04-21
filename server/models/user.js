const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email_address: {type: String, required: true},
        user_type: {
                type: String, 
                required: true,
                enum: ['owner','renter','admin'],
                default: 'renter'    
            },
        status: {
            type: String, 
            required: true, 
            enum: ['active','inactive'],
            default: "inactive"
        },
        firebase_uid: {type: String, required: true},
        avatar: {type:String}
},
{
    toJSON: { virtuals: true }
}

);

// avoiding using child refrence because we don't know how many sets of banking
// details or payment methods a user may add. [no unbounded arrays in our database document.]

/**
 * REFERENCES
 *  https://www.youtube.com/watch?v=vonDePE2lnE&list=PLi59TU3R9ZiDzu2lEX6X9z4vQq8hZdwuk&index=165
 *  https://mongoosejs.com/docs/populate.html#populate-virtuals
 * 
 * sort of like where BankDetail.user = User._id
 *  */
userSchema.virtual('BankingInformation', {
    ref: 'BankDetail', 
    localField: '_id',
    foreignField: 'user',
    justOne: false
});

userSchema.virtual('PaymentInformation', {
    ref: 'PaymentMethod',
    localField: '_id',
    foreignField: 'user',
    justOne: false
});


module.exports = mongoose.model("User", userSchema);

