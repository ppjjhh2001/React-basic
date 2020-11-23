import React,{useState} from 'react'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/BUtton'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme => ({
  hidden: {
    display: 'none',
  },
  root: {
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%"
  }
})))
const CustomerAdd = ({loadData}) => {
  const classes = useStyles()

  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [job, setJob] = useState('')
  const [fileName, setFileName] = useState('')
  const [open, setOpen] = useState(false)

  const addCustomer = () => {
    const url = '/api/customerAdd'
    const formData = new FormData()
    formData.append('image',file)
    formData.append('name',name)
    formData.append('birthday',birthday)
    formData.append('gender',gender)
    formData.append('job',job)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(url,formData,config)
  }

  const handleFormSubmit = async e => {
    setFile('')
    setName('')
    setBirthday('')
    setGender('')
    setJob('')
    setFileName('')
    setOpen(false)
    window.location.reload()
    await addCustomer()
  }

  const handleFileChange = e => {
    console.log(e.target.value)
    setFile(e.target.files[0])
    setFileName(e.target.value) 
  }
  const handleNameChange = e => { setName(e.target.value)}
  const handleBirthdayChange = e => { setBirthday(e.target.value)}
  const handleGenderChange = e => { setGender(e.target.value)}
  const handleJobChange = e => { setJob(e.target.value)}

  const handleOpen = ()=> {
    setOpen(true)
  }
  const handleClose = () => {
    setFile('')
    setName('')
    setBirthday('')
    setGender('')
    setJob('')
    setFileName('')
    setOpen(false)
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>고객 추가하기</Button>
      <Dialog className={classes.root} open={open} onClose={handleClose}>
        <DialogTitle>
          고객  추가하기
        </DialogTitle>
        <DialogContent >
          <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={file} value={fileName} onChange={handleFileChange} />
          <label htmlFor="raised-button-file">
          <Button variant="contained" color="primary" component="span" name="file">
            {fileName===""? "프로필 이미지 선택" : fileName}
          </Button>
          </label>
          <TextField label="이름" type="text" name="name" value={name} onChange={handleNameChange} />
          <TextField label="생년월일" type="text" name="birthday" value={birthday} onChange={handleBirthdayChange} />
          <TextField label="성별" type="text" name="gender" value={gender} onChange={handleGenderChange} />
          <TextField label="직업" type="text" name="job" value={job} onChange={handleJobChange} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>추가</Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
    // <form  className = {classes.hidden} onSubmit = {handleFormSubmit}>
    //    <h1>고객 추가</h1> 
 
    //    <button type="submit">추가하기</button>
    // </form>
  )
}
export default CustomerAdd