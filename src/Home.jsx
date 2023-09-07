import React from 'react'
import { useGlobalContext } from './context'

const Home = () => {
  const {openSlidebar,openModel}= useGlobalContext ();
  console.log(openSlidebar);
  return (
    <div>
      Home
    </div>
  )
}

export default Home
