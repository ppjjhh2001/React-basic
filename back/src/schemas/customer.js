const pool = require('./index')
const express = require('express')
const router = express.Router()

router.get('/api/customers', async(req,res)=> {
  try{
    const data = (await pool.query(`select * from CUSTOMER WHERE isDeleted = 0`))[0]
    res.send(data)
  } catch(error) {
    console.log(error)
  }
})

module.exports = router