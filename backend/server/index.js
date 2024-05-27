const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('../routes/routes')
const cors = require('cors');

require('dotenv').config()
//database url 
const mongoDBUrl = process.env.DATABASE_URL
const port = process.env.PORT

app.use(cors())
app.use(express.json())

//use mongoose to connect to the database via localhost url
mongoose.connect(mongoDBUrl);
//create a variable that represents the mongodb connection
const database = mongoose.connection

app.use('/api', routes)

//log error if db connection fails
database.on('error', (error) => {
  console.log(error)
})

//database connected successfully 
database.once('connected', () => {
  console.log('Database Connected');
})


app.listen(port, () => {
  console.log('server running on port 3001')
})