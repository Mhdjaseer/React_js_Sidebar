import React from 'react'
import Home from './Home'
import Model from './Model'

const Sidebar = () => {
  return (
    <div>
      <Home/>
      <Model/>
      <Sidebar/>
    </div>
  )
}

export default Sidebar
