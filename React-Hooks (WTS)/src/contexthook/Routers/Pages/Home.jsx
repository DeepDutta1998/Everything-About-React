import React, { useEffect } from 'react'
import { useContext } from 'react'
import UserContex from '../../UserContex'

const Home = () => {
    const data =useContext(UserContex)
    useEffect(()=>{
      data.update()
    })
  return (
    <div>
      <h1>This is home page </h1>
      <h3> my name is {data.state.name}</h3>
    </div>
  )
}

export default Home
