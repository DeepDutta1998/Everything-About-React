import React from 'react'
import NoteContex from './NoteContex'

const CounterState = ({children}) => {
    const state={
        name:"Deep Dutta",
        email:"deepinslg@gmail.com",
        phone:"8388964466",
        address: "Siliguri"
    }
  return (
    <NoteContex.Provider value={state}>
        {children}
    </NoteContex.Provider>
  )
}

export default CounterState
