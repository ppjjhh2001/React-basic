const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/hello', (req,res)=> {
  res.send({message:'Hello Fuckers'})
})
app.listen(port, ()=> console.log(`server is running on http://localhost:${port}`))