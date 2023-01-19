import React, { useState } from 'react'

const ObjectUpdate = () => {
    const Myobj={
        Name:'Barnali Mahato',
        Roll:22,
        Email:'barnali1999@gmail.com',
        phone:9873098543
    }
    const [obj,setObj]=useState(Myobj)
  return (
    <div>
      <h2>Name : {obj.Name}</h2>
      <h2>Roll : {obj.Roll}</h2>
      <h2>Email: {obj.Email}</h2>
      <button onClick={()=>setObj({Name:'Alka Mahato',Roll:'04',Email:'Alka9@gmail.com'})}>Update</button>
      
    </div>
  )
}

export default ObjectUpdate
