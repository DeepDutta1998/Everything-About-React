import React from 'react'
import { useState } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

const Object = () => {
    let obj={
        name:"Barnali Mahato",
        email:"barnali123@gmail.com",
        phone:"9875320987",
        city:'jamshedpur',
        password:"123456"
    }
    const[user,setUser]=useState(obj)
  return (
    <div>
      <h1>my name is {user.name}</h1>
      <h1>my city {user.city}</h1>
    </div>
  )
}

export default Object
