const mongoose = require('mongoose')

// define schema for a ticket document

const ticketSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'

    }, 
    product: {
        type: String,
         required: [true, 'please select a product'],
         enum: ['iPhone', 'Macbook Pro', 'HP Elitebook', 'HP Probook'],
 
    },
    description: { 
          type: String,
           required: [true, 'Please enter a description of the issue'], 
    },
    status: {
        type: String,
        enum: ['new', 'open', 'closed'],    
        default: 'new'
    }
},
{
    timestamps: true
}

)
//   create a model based on the Schema
const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket