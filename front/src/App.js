import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead';
import { useEffect, useState, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import {makeStyles} from '@material-ui/core/styles'
import CustomerAdd from './components/CustomerAdd'

const useStyles = makeStyles((theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
})))
const App = () => {
  const classes = useStyles()
  const [customers,setCustomers] = useState(false)
  const [completed, setCompleted] = useState(0)
  
  useEffect(()=>{
    loadData()
    const timer = setInterval(()=> {
      setCompleted((completed)=> (completed >=100 ? 0 : completed + 10))
    },20)
    return () => {
      clearInterval(timer)
    }
  },[])

  const loadData = async() => {
    const response =await fetch('/api/customers')
    const data = await response.json()
    setCustomers(data)
  }
    
  return (
    <div>
      <div className = {classes.root}>
        <Table>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>설정</TableCell>
          </TableHead>
          <TableBody>
            {customers ? (
              <>
                {customers.map(c=> <Customer 
                  loadData={loadData}
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />)}
            </> 
            ) : 
              <TableRow>
              <TableCell colSpan = "6" align="center">
                <CircularProgress className={classes.progress} value ={completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </div>
      <CustomerAdd loadData={loadData} />
    </div>
  );
}

export default App
