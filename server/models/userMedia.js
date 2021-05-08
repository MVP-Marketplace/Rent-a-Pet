const mongoose = require("mongoose");


const UserMediaSchema = mongoose.Schema({

    user: 
        {
            type: mongoose.Schema.ObjectId, 
            ref: 'User',
            required: [true, 'Media must be associated with a user']
        },
    name: {
            type: String,
            required: [true, 'Media must have a name']
          },
    description: {
            type: String,
            required: [true, 'Media must be given a description']
    },
    media_link: {type: String, required: true},
    status: {
        type: String, 
        required: true, 
        enum: ['active','inactive','deleted'],
        default: "active"
    }
    
},
{
    timestamps: true 
}
)

module.exports = mongoose.model("UserMedia", UserMediaSchema);