import React from 'react'
import { useContext } from 'react'
import Notecontex from '../../Contex-Api/NoteContex'




export const About = () => {

  const a = useContext(Notecontex)
  return (
    <div>
     <h1>User Data</h1>
     <h1 className="text-danger"> Name: {a.name}</h1>
     <h1 className="text-danger"> Email: {a.email}</h1>
     <h1 className="text-danger"> Phone: {a.phone}</h1>
     <h1 className="text-danger"> Address: {a.address}</h1>

    </div>
  )
}
