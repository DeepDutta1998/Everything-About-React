import React, { useEffect } from 'react'
import { useState } from 'react'

const Title = () => {
    const[val,setval]=useState(0)
    useEffect(()=>{
        document.title =`chat ${val}`
    })
  return (
    <div>
            <button style={{width:'300px', height:'100px' }} onClick={()=>{setval(val+1)}}>
        <h1>Click me to Increment {val}</h1>
      </button>
    </div>
  )
}

export default Title
