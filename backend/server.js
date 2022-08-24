const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
app.use(cors())
dotenv.config()
app.get('/', function (req, res) {
  res.send('Hello World hi')
})

app.listen(8000,()=>{
    console.log('running port 3000')
})
