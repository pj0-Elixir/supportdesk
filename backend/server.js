console.log("🔄 Server file reloaded...");
const express = require('express')

const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res)=>{
     res.status(200).json({message: 'Welcome to Support Desk API'}) 
})

app.post('/api/users/', (req, res)=>{
     res.status(200).json({message: 'New user created'}) 
})



app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
