import React, { useEffect, useState } from 'react'
import { getuser, deleteUser, } from '../Service/Api'
import { Link } from 'react-router-dom';
import { TableContainer,Paper,Table,TableHead,TableRow,TableCell,TableBody,Typography,makeStyles,Button,} from '@material-ui/core';


const useStyles = makeStyles({
  table: {
      width: '90%',
      margin: '50px 0 0 50px',
  },
  thead: {
      '& > *': {
          fontSize: 20,
          background: 'linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(40,40,228,1) 46%, rgba(224,55,0,1) 100%);',
          color: '#FFFFFF',
      }
  },
  row: {
      '& > *': {
          fontSize: 18
      }
  }
})
export default function Alluser() {
  const classes=useStyles()

  const [user,setUser]=useState([])

    useEffect(()=>{
      getalluser()
    },[])

  

  const getalluser= async()=>{
     const response=await getuser()
     console.log(response.data);
     setUser(response.data)
  }

  const deleteUserData=async (id)=>{
     await deleteUser (id)
     getalluser()
  }

 
  return (
    <div>
      <Typography variant="h3" style={{marginBottom:50}}>ALL DATA</Typography>
      <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>PHOTO</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>E-MAIL</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>CITY</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user && user.map((users) => (
            <TableRow className={classes.row} key={users.id}>
              <TableCell>{users.id}</TableCell>
              <TableCell><img src={users.photo}/></TableCell>
              <TableCell>{users.name}</TableCell>
              <TableCell>{users.email}</TableCell>
              <TableCell>{users.phone}</TableCell>
              <TableCell>{users.city}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/edit-user/${users.id}`} style={{marginRight:10}} >Edit</Button>
                
                <Button variant="contained" onClick={()=>deleteUserData(users.id)} color="secondary">Delete</Button>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
