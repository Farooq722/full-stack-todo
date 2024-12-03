import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'  
import { Taskbar } from './components/Taskbar';
import { Boxs } from './components/Boxs';
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosFetch = () => {
      fetch("http://localhost:3000/todos").then(async function(res) {
        const json = await res.json();
        setTodos(json.todo);
      })
    }
    todosFetch();
  },[todos]);
  
  return (
   <div className='bg-gradient-to-r from-cyan-200 to-blue-300 h-screen w-full'>
    <Taskbar />
    <div className='flex flex-row space-x-0'>
      <Boxs title="Total Task" count={8}></Boxs>
      <Boxs title="Completed" count={5}></Boxs>
      <Boxs title="Pending" count={4}></Boxs>
    </div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos} ></Todos>
   </div>
  )
}

export default App
