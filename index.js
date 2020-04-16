const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017',{useUnifiedTopology: true, useNewUrlParser: true})

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/',require('./routes/index.route'))

const port = 3000 | process.env.PORT

app.listen(port)