import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayerList from './components/PlayerList'
import PlayerForm from './components/PlayerForm'
import Main from './view/Main'
import PlayerStatus from './components/PlayerStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>} />
      <Route path="/players/list" element={<PlayerList/>} />
      <Route path="/players/create" element={<PlayerForm/>} />
      <Route path="/players/status" element={<PlayerStatus/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
