const express = require('express')


const dotenv = require('dotenv').config()

const connectDB = require('./config/db')

const colors = require('colors') 

const cors = require('cors');

const PORT = process.env.PORT || 5000 
// connect database
connectDB()
const {errorHandler} =require('./middleware/errorMiddleware')

const app = express()
        
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: 'https://supportdesk-frontend.netlify.app', 
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, 
}));

app.get('/', (req, res)=>{
     res.status(200).json({message: 'Welcome to Support Desk API'}) 
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets/', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
