const mongoose = require('mongoose')

// define schema for a note document

const noteSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'

    },
     ticket: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Ticket'

    },
    text: {
        type: String,
         required: [true, 'please add some text'],
 
    },
    isStaff: { 
          type: Boolean,
           required: false
    },
    staffId: {
        type: String,
    }
},
{
    timestamps: true
}

)
//   create a model based on the Schema
const Note = mongoose.model('Note', noteSchema)

module.exports = Note