const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/customers', (req,res)=> {
  res.send(
    [
      {
        'id':1,
        'image': 'https://placeimg.com/64/64/any',
        'name': "강동진1",
        'birthday': '111111',
        'gender': '남자1',
        'job': '학생1'
      },
      {
        'id':2,
        'image': 'https://placeimg.com/64/64/any/grayscale',
        'name': "강동진2",
        'birthday': '222222',
        'gender': '남자2',
        'job': '학생2'
      },
      {
        'id':3,
        'image': 'https://placeimg.com/64/64/any/sepia',
        'name': "강동진3",
        'birthday': '333333',
        'gender': '남자3',
        'job': '학생3'
      }
    ])
})
app.listen(port, ()=> console.log(`server is running on http://localhost:${port}`))
// [
//   {
//     'id':1,
//     'image': 'https://placeimg.com/64/64/any',
//     'name': "강동진1",
//     'birthday': '111111',
//     'gender': '남자1',
//     'job': '학생1'
//   },
//   {
//     'id':2,
//     'image': 'https://placeimg.com/64/64/any/grayscale',
//     'name': "강동진2",
//     'birthday': '222222',
//     'gender': '남자2',
//     'job': '학생2'
//   },
//   {
//     'id':3,
//     'image': 'https://placeimg.com/64/64/any/sepia',
//     'name': "강동진3",
//     'birthday': '333333',
//     'gender': '남자3',
//     'job': '학생3'
//   }
// ]