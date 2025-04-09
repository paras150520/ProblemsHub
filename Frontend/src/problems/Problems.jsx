import React from 'react'
import Navbar from '../components/Navbar'
import Problemsdiv from '../components/problemsdiv'



function Problems() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen max-w-full p-4 ">
        <Problemsdiv/>
      </div>
    </>
  )
}

export default Problems
