import { getDefaultNormalizer } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import Loading from '../../FetchApi/Github/Loading'

const Api = () => {
  const[user,setuser]=useState([])
  
  const getuser=async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    setuser(await response.json())

  }
  useEffect(()=>{
    getuser()
  })
  
  return (
    <div>
      <h1>posts data fetch</h1>
      <div className="container">
        <div className='row'>
        {
          user.map((MyData)=>{
            return(
              <div className='col-md-4 mb-4' key={MyData.id}>
              <div className='card cardd'>
              
              <div className='Card body'>
                  <h5 className='card-title '>Name : {MyData.name}</h5>
                  <p> email : {MyData.email}</p>
                  <p> website : {MyData.website}</p>
                  <p>city : {MyData.address.city}</p>
                  <a href="#" className="btn btn-primary" onClick={()=>setuser()}>Details</a>

              </div>
              </div>
          </div>
             
            )
          })
        }

        </div>
      </div>
    </div>
  )
}

export default Api
