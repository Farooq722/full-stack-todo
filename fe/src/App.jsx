import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'  
import { Taskbar } from './components/Taskbar';
import { Boxs } from './components/Boxs';
import './App.css'
import { Todos } from './components/Todos'
const backendUrl = import.meta.env.VITE_BACKEND_URL;


function App() {
  const [todos, setTodos] = useState([]);
  const [todosCount, setTodosCount] = useState(0);

  // useEffect(() => {

  // },[])

  useEffect(() => {
    const todosFetch = () => {
      fetch(`${backendUrl}/todos`).then(async function(res) {
        const json = await res.json();
        setTodos(json.todo);
        setTodosCount(json.todo.length);
      })
    }
    todosFetch();
  },[]);
  
  return (
    <div className='bg-gradient-to-r from-cyan-200 to-blue-300 h-screen w-full max-w-screen '>
      <div className='bg-gradient-to-r from-cyan-200 to-blue-300 h-auto w-full'>
        <Taskbar />
        <div className='flex flex-row space-x-0'>
          <Boxs title="Total Task" count={todosCount}></Boxs>
          <Boxs title="Completed" count={0}></Boxs>
          <Boxs title="Pending" count={0}></Boxs>
        </div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
    </div>
  )
}

export default App
