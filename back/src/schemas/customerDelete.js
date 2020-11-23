const express = require('express')
const pool = require('./index')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: './upload'})

router.delete('/api/deleteCustomer/:id', async (req,res )=>{
  console.log(req.params.id)
  try{
    await pool.query(`UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ${req.params.id}`)

  } catch(error) {
    console.error(error)
  }
})

module.exports = router