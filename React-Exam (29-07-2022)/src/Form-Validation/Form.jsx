import React from 'react'
import { useState } from 'react'

export const Form = () => {
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const[city,setCity]=useState('');
    const[password , setPassword]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault()
        const user = {name,phone,email,city,password};
        console.log(user);
        alert('Check Console For Data');
    }
  return (
    <div className="text-dark col-md-10 mx-auto shadow p-5">
        <h1 className="text-danger">Form Validation</h1>
    <form onSubmit={handleSubmit} >
      <div className='form-group'>
        <label>Name:
        <input type="text" placeholder={name}value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        </div>
        <div className='form-group'>
        <label>Email:
        <input type="email" placeholder={email}value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        </div>
        <div className='form-group'>
        <label>City:
        <input type= "text"  placeholder={city}value={city} onChange={(e)=>setCity(e.target.value)}/>
        </label>
        </div>
        <div className='form-group'>
        <label>Phone:
        <input type="number"placeholder={phone} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </label>
        </div>
        <div className='form-group'>
        <label>Password:
        <input type="password"placeholder={password} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        </div>
        <div>
             <input type="submit" value="submit" />
             
        </div>
       
        </form>
    </div>
  )
}

export default Form
