import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Todo from './components/Todos'
import Register from './components/Register'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Toaster position='top-center' />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
