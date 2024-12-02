import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'  
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
   <>
    <CreateTodo></CreateTodo>
    <Todos todos={todos} ></Todos>
   </>
  )
}

export default App
