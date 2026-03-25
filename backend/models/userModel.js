const mongoose = require('mongoose')

// define schema for a user document

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']

    },
    email: {
        type: String,
         required: [true, 'please add an email'],
         unique: true

    },
    password: { 
          type: String,
          required:   [true, 'please add a password']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
}

)
//   create a model based on the Schema
const User = mongoose.model('User', userSchema)

module.exports = User