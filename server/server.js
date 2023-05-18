const express = require('express')
const cors = require('cors')

const app = express()

require('dotenv').config()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

require('./configs/mongoose.config')

const Routes = require('./routes/store.routes')
Routes(app)

app.listen(port, () => console.log('Connected to server on port', port))
