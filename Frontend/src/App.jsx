import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import Problems from './problems/Problems'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Problems" element={<Problems/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
