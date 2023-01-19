import React, { useEffect, useState } from 'react'
import Githubuser from './Github/Githubuser'
import Loading from './Github/Loading'

const ApiLoading = () => {
    const[user,setuser]=useState([])
    const [load,setload]=useState(true)
    const getgithub = async()=>{
        try{
            const response = await fetch('https://api.github.com/users')
            // const data = await response.json()
            // console.log(data);
            setload(false)
            setuser(await response.json())
        }catch(error){
            setload(false)
            console.log(error +"data not found")
        }
    }
    useEffect(()=>{
        getgithub()
    },[])

    if(load){
        return <Loading/>
      }
  return (
    <div>
      <h1>fetch data</h1>
      <Githubuser users={user}/>
    </div>
  )
}

export default ApiLoading
