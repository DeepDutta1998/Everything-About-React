import React, { useState } from 'react'

const ClearData = () => {
    const [name,setName]=useState('Barnali Mahato')
  return (
    <div>
      <h1> My name is {name}</h1>
      <button onClick={()=>setName([])}>Clear Data</button>
    </div>
  )
}

export default ClearData
