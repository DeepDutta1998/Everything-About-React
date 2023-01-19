import React, { useState } from 'react'

const Count = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
      <h1>start counting {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button> <br/><br/>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      
    </div>
  )
}

export default Count
