import React, { useState } from 'react'

const Name = () => {
    const [name,setName]=useState('Alka')
    const click=()=>{
        if(name==='Alka')
        {
          setName('Barnali')
        }
        else{
          setName('Alka')
        }
    }
  return (
    <div>
      <h1>change name  {name}</h1>
      <button onClick={click}>Change</button>
    </div>
  )
}

export default Name
