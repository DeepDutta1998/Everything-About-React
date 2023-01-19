import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

export default function RegistrationForm(){
  const[name, setName]=useState('Deep Dutta');
  const[date, setDate]=useState(new Date());
  const[email , setEmail]=useState('deepinslg@gmail.com');
  const[uid, setUid]=useState('deepinslg@gmail.com');
  const[pwd , setPwd]=useState('12345678');
  const[password , setPassword]=useState('12345678');
  function handleSubmit(e){
    e.preventDefault();

    const user = {name, date, email, pwd};
    axios.post("http://localhost:4000/register", user)
    .then(
        res => {
            console.log(res.data)
        }
    );

  }
    return(
        <Form className='w-25 py-3 mx-auto bg-warning' onSubmit={handleSubmit} >
     <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" value={name}
    onChange={e => setName(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicGender">
    <Form.Label>Gender</Form.Label>
    {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="male"
        name="group1"
        type={type}
       id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="female"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
    </div>
  ))}
    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicDate">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="" value={date}
    onChange={e=>setDate(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email}
    onChange={e=>setEmail(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Confirm Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={uid}
    onChange={e=>setUid(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={pwd} 
    onChange={e=>setPwd(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} 
    onChange={e=>setPassword(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> 
  <Button variant="danger" type="submit">
    Submit
  </Button>
  
</Form>
    )  
} 