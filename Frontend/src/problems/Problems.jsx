import React from 'react'
import Navbar from '../components/Navbar'
import Problemsdiv from '../components/problemsdiv'



function Problems() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen w-full grid md:grid-cols-3 gap-4 ">
        <Problemsdiv/>
      </div>
    </>
  )
}

export default Problems
