import { useState } from 'react'
import UserContex from './UserContex'

const UserState = (p) => {
    const s1={
        name :'Barnali Mahato',
        email :'barnali@gmail.com',
        phone :'9939700779'
    }
    const [state,setState]=useState(s1)
    const update = () => {
      setTimeout(()=>{
        setState({
          name: 'Alka',
          email : 'alka9@gmail.com'
        })
      },2000)
    }
  return (
    <UserContex.Provider value={{state,update}}>
        {p.children}
    </UserContex.Provider>


  )
}

export default UserState
