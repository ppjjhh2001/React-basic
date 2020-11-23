const express = require('express')
const pool = require('./index')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: './upload'})

router.post('/api/customerAdd', upload.single('image'), async(req,res)=> {
  const {name, birthday, gender, job} = req.body

  let image = '/image/'+ req.file.filename
  try{
    await pool.query(`INSERT INTO CUSTOMER VALUES (null, "${image}", "${name}", "${birthday}", "${gender}", "${job}", NOW(), 0)`)
    
  } catch(error) {
    console.error(error)
  }
})
module.exports = router