import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TalbeHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead';
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'


const customers = [
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
]
const App = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
        {customers.map(c => <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />)}
        </TableBody>
      </Table>
    </>
  );
}

export default App
