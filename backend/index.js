const connectToMongo = require('./db')
const express = require('express')
const path = require('path')
const app = express()

var cors = require('cors')
connectToMongo();

app.use(cors(
  {
    origin: "*",
    methods: ["POST", "GET","DELETE","PUT"], 
    credentials: true
  }
))
app.use(express.json())
app.get('/',(req,res)=>{
  res.json({message:"welcomes you in inotes"})
})
app.use('/api/auth', require('./routes/Auth'))
app.use('/api/notes', require('./routes/Notes'))

app.listen(3001, () => {
    console.log("Server is Running")
})




