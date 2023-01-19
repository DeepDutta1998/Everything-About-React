import React, { useEffect, useState } from 'react'

const Alert = () => {
    const [num,setNum]=useState(0)
    useEffect(()=>{
        alert('clicked')
    })
  return (
    <div>
      <button style={{width:'300px', height:'100px' }} onClick={()=>{setNum(num+1)}}>
        <h1>Click me to Increment {num}</h1>
      </button>
      
    </div>
  )
}

export default Alert
