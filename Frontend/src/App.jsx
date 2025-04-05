import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import Problems from './problems/Problems'


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Problems" element={<Problems/>}/>
     </Routes>
    </>
  )
}

export default App
