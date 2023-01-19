import React, { useContext, useEffect } from 'react'
import UserContex from '../../UserContex'

const User = () => {
  const a = useContext(UserContex)
  useEffect(()=>{
    a.update()
  })
  return (
    <div>
      user page
      <h5> my email : {a.state.email}</h5>
    </div>
  )
}

export default User
