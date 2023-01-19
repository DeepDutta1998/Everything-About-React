import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import PostDetails from './PostDetails'


const ApiPostDetails = () => {
  const [user, setuser] = useState([])
  const getusers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    setuser(await response.json())

  }

  useEffect(() => {
    getusers()
  })

  return (
    <div>
      <h1>Users data fetch</h1>
      <div className="container">
        <div className='row'>
          {
            user.map((Mydata) => {
              const {id,name,username,email,website,address}=Mydata
              return (
                <div className='col-md-4 mb-4' key={id}>
                  <div className='card cardd'>

                    <div className='Card body'>
                      <h5 className='card-title '>Name : {name}</h5>
                      <h1> {username}</h1>
                      <p> email : {email}</p>
                      <p> website : {website}</p>
                      <p>city : {address.city}</p>
                      <Link to={`/postdetails/${id}`}>
                        <button className='btn-primary'>details</button>
                      </Link>

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

export default ApiPostDetails
