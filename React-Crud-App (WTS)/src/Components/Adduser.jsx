import React, { useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, Typography,makeStyles } from '@material-ui/core';
import { adduser } from '../Service/Api';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
      width: '50%',
      margin: '5% 0 0 25%',
      '& > *': {
          marginTop: 20
      }
  }
})
const initialvalue={
  photo: '',
  name:'',
  email:'',
  phone:'',
  city:''
}
export default function Adduser() {
  const[user, setUser]=useState(initialvalue)

  const { photo, name, email, phone, city } = user;

  const classes = useStyles();

  const navigate = useNavigate()
  
  const onValueChange=(e)=>{
    console.log(e.target.value);
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
  }
  const adduserdetalis= async ()=>{
   await adduser(user)
   navigate('/all-user');
  }
  
  const fileHandler=(e) =>{
    console.log(e.target.files[0]);
  }

  return (
    <FormGroup className={classes.container}>
    <Typography variant="h4">ADD PEOPLE</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Photo</InputLabel>
        <Input  type='file' onChange={(e) => fileHandler(e)} value={photo}  />
        <Button onClick={() => fileHandler()}>Uploade</Button>
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input  name='name' onChange={(e) => onValueChange(e)} value={name}  />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input  name='email' onChange={(e) => onValueChange(e)} value={email} />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input  name='phone' onChange={(e) => onValueChange(e)} value={phone} />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">City</InputLabel>
        <Input  name='city' onChange={(e) => onValueChange(e)} value={city} />
    </FormControl>
    <FormControl>
        <Button variant="contained" onClick={() => adduserdetalis()} color="secondary" >Add User</Button>
    </FormControl>
</FormGroup>
  )
}
