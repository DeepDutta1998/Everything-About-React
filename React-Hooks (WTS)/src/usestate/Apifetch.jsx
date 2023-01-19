import React, { useEffect, useState } from 'react'

const Apifetch = () => {
    const [user,setUser]=useState([])
    const getuser=async()=>{
        // const response=await fetch('https://jsonplaceholder.typicode.com/photos')
        const response=await fetch('https://jsonplaceholder.typicode.com/albums')

        setUser(await response.json())
    }
    useEffect(()=>{
        getuser()
    },[])
  return (
    <div>
        <h1>fetch api data</h1>
        <div className="container">
            <div className='row'>
                {
                    user.map((CurrentData)=>{
                        return(
                            <div className='col-md-4' >
                                <div className='card cardd' >
                                <img className='card-img-top' src={CurrentData.thumbnailUrl} alt="Card image cap"></img>
                                
                                <div className='Card body'>
                                    <h5 className='card-title'>{CurrentData.url}</h5>
                                    <p>{CurrentData.title}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Apifetch
