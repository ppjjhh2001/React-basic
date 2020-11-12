import './App.css';
import Customer from './components/Customer'

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
function App() {
  return (
    <>
    {customers.map(c => {
      return (
        <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
      ) 
    })}
    </>
  );
}

export default App;
