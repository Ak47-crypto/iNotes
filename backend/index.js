const connectToMongo = require('./db')
const express = require('express')
const path = require('path')
const app = express()
const port = 2000
var cors = require('cors')
connectToMongo();

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/Auth'))
app.use('/api/notes', require('./routes/Notes'))

app.listen(port, () => {
  console.log(`server started on https://localhost:${port}`)
})



