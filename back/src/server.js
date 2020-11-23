const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 4000;
const customerSchema =  require('./schemas/customer')
const CustomerAdd = require('./schemas/CustomerAdd')
const customerDelete = require('./schemas/customerDelete')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/image',express.static('./upload'))

app.use('',customerSchema)
app.use('',CustomerAdd)
app.use('',customerDelete)
app.listen(port, ()=> console.log(`server is running on http://localhost:${port}`))