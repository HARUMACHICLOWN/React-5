import { useState } from 'react';
import './App.css';

function App() {
  function id(){}
  const[value1,setValue1]= useState('')
  const[value2,setValue2]= useState('')
  const[value3,setValue3]= useState('')
  const[editId, setEditId]=useState(null)
  const[obj,setObj]=useState(getInitObj())
const initNotes= [
{ id: id,
  name:'prod1',
  catg: 'catg1',
  cost:100,},
  { id: id,
    name:'prod2',
    catg: 'catg2',
    cost:200,},
  { id: id,
    name:'prod3',
  catg: 'catg3',
  cost:300,}
]
const[notes,setNotes] = useState(initNotes)
function remItem(id){
  setNotes(notes.filter(note => note.id !== id))
}
 const result = notes.map(note=>{
  return <p key= {note.id} >
   <td>{note.name}</td>
    <td>{note.catg}</td>
    <td>{note.cost}</td>
    <button onClick={()=> remItem(note.id)}>Очистить всё</button>
    <button onClick={()=>setEditId(note.id)}>Изменить</button>
  </p>
})
function getValue(name){
  return notes.reduce((res, note)=> note.id === editId ? note[name] : res, '')
}
function changeItem(name,event){
  setNotes(notes.map(note => note.id === editId ? {...note, [name]: event.target.value} : note))
}
function addItem(){
  let obj = {
    id: id(),
    name:value1,
    catg:value2,
    cost:value3
  }
  setNotes([...notes,obj])
}
function saveItem(){
  if(editId){
    setEditId(null);
  }else{
    setNotes([...notes, obj])
    setObj(getInitObj())
  }
}
function getInitObj(){
  return{
    id: id(),
    name: '',
    catg: '',
    cost: '',
  }
}
  return (
      <div className="App">
<table border={3} bgcolor='gray'>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    <tr>
      {result}
    </tr>
  </tbody>
</table>
  <br/>
  <input value={value1} onChange={event=>setValue1(event.target.value)} />
  <input value={value2} onChange={event=>setValue2(event.target.value)} />
  <input value={value3} onChange={event=>setValue3(event.target.value)} />

  <button onClick={addItem}>Сохранить</button>
  <br/>
  <input value={getValue('name')} onChange={event=>changeItem('name',event)} />
  <input value={getValue('catg')} onChange={event=>changeItem('catg',event)} />
  <input value={getValue('cost')} onChange={event=>changeItem('cost',event)} />
    <br/><br/><br/>
    <input value={getValue('name')} onChange={event => changeItem('name',event)} />
    <input value={getValue('catg')} onChange={event => changeItem('catg',event)} />
    <input value={getValue('cost')} onChange={event => changeItem('cost',event)} />
    <button onClick={saveItem}>Сохранить изменение</button>

      </div>
  );
}

export default App;
