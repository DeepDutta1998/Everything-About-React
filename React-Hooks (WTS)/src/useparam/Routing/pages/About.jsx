import { useParams } from "react-router-dom"
import React from 'react'

const About = () => {
  const {id,name}= useParams()
  return (
    <div>
      <h1>About Page {id} {name}</h1>
    </div>
  )
}

export default About
