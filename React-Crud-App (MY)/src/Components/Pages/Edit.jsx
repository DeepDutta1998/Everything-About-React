import React, { useEffect, useState } from 'react'
import { Card, Grid, TextField, Typography, CardContent, Button, Avatar } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Edit = () => {
  const {id} = useParams()
  const [user, setuser] =useState({
    name:"",
    email:"",
    phone:"",
    address:""
  })
  const { name ,email,phone,address}=user;
  
  const FormHandle = (e)=>{
    let name= e.target.name;
    let value= e.target.value;
    setuser ( {...user ,[name]:value})
  }
  useEffect(()=>{
    loaduser();
  },[])
  const FormSubmit =async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user)
    alert ("Update Successfully")
  }
  
  const loaduser = async()=>{
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setuser(result.data);
    // console.log(result);
  };
  return (
    <div style={{width:'100%',
    height:'540px',
    background:' #36D1DC',
    background: '-webkit-linear-gradient(to right, #5B86E5, #36D1DC)',  
    background: 'linear-gradient(to right, #5B86E5, #36D1DC)' }}>
      <Typography variant='h4'><u>Edit User</u>

</Typography>
<br />
    <Card style={{ width: "600px", margin:'auto',backgroundColor:'#b6eef0'}}>
      <CardContent>
        <form onSubmit={FormSubmit}>
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <TextField label="name" placeholder='enter your name' variant='outlined' fullWidth required
                name='name'
                value={name}
                onChange={e =>FormHandle(e)}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField type="email" label="email" placeholder='enter email' variant='outlined' fullWidth required
              name='email'
              value={email}
              onChange={e => FormHandle(e)}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField label="phone no." placeholder='enter your number' variant='outlined' fullWidth required
              name='phone'
              value={phone}
              onChange={e => FormHandle(e)}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField label="address" placeholder='enter your address' variant='outlined' fullWidth required
              name='address'
              value={address}
              onChange={e => FormHandle(e)}
              />
            </Grid>
            <Grid xs={12} item>
              <Button variant='contained' type="submit" color='primary' fullWidth >Update user</Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default Edit
