import React, { useState } from 'react'
import { Card, Grid, TextField, Typography, CardContent, Button, Avatar } from '@mui/material'
import axios from 'axios'


const AddUser = () => {
  const [add, setadd] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })
  const { name, email, phone, address } = add;

  const FormHandle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setadd({ ...add, [name]: value })
  }
  const FormSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3003/users', add)
    alert("User Added Successfully")
  }
  return (
    <div style={{
      // backgroundColor:'#b6eef0',
      
    background:' #36D1DC',
    background: '-webkit-linear-gradient(to right, #5B86E5, #36D1DC)',  
    background: 'linear-gradient(to right, #5B86E5, #36D1DC)' ,
       height: '540px'
    }}>
      <Typography variant='h4'><u>Add User</u>

      </Typography>
      <br />
      <table style={{ width: '1200px' ,height:'470px',margin:'auto'}}>
        <tr>
          <th>
            <img style={{ width: '400px' , height:'400px' , margin:'auto',borderRadius:"400px"}} src="./image/user.png" alt='image'></img>
          </th>
          <th>
          <Card style={{ width: 600, margin:'auto',height:'350px',backgroundColor:'#b6eef0'}}>
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
                    <Button variant='contained' type="submit" color='primary' fullWidth >Add user</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
          </th>
        </tr>
      </table>
      {/* <Card style={{ width: "600px", margin:'auto',backgroundColor:'#d5f2a5'}}>
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
                    <Button variant='contained' type="submit" color='primary' fullWidth >Add user</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card> */}
    </div>
  )
}

export default AddUser
