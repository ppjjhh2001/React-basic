import React,{useState} from 'react'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/BUtton'
import Typography from '@material-ui/core/Typography'

export default ({id}) => {
  const [open,setOpen] = useState(false)

  const deleteCustomer = (id) => {
    const url = '/api/deleteCustomer/'+ id
    axios.delete(url)
    window.location.reload()
  }
  const handleOpen = ()=> {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Button varient="contained" color="secondary" onClick = {handleOpen}>삭제</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle onClose={handleClose}>
          삭제 경고
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button varieant="contained" color="primary" onClick={()=> deleteCustomer(id)} >삭제</Button>
          <Button varieant="outlined" color="primary" onClick={handleClose} >닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
    
  )
}