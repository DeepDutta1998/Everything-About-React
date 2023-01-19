import React from 'react'
import { useEffect, useState } from 'react'
import { getUser,deleteUser } from '../service/Api'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Container,Card} from 'react-bootstrap'
export const AllUser = () => {
  
  const [user,setUser]=useState([])

    useEffect(()=>{
      getalluser()
    },[])

  

  const getalluser= async()=>{
     const response=await getUser()
     console.log(response.data);
     setUser(await response.data)
  }
  const deleteuserdata= async (id)=>{
    await deleteUser(id)
    getalluser()
  }
  return (
    <div>
      <Container className='p-20'>
      <h1>User Details</h1>
        <Card>
        <Card.Body>
         <Table striped bordered hover>
      <thead style={{background:"blueviolet",color:"white"}}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>State</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody style={{background:"aquamarine"}}>
        {user.map((users)=>(
          <tr>
          <td>{users.id}</td>
          <td>{users.name}</td>
          <td>{users.email}</td>
          <td>{users.phone}</td>
          <td>{users.city}</td>
          <td>{users.state}</td>
          <td><Link to={`/edit-user/${users.id}`}><Button variant="primary">Edit</Button></Link></td>
          <td><Button onClick={()=>deleteuserdata(users.id)} variant="danger">Delete</Button></td>
        </tr>
        ))}
      </tbody>
      </Table>
      </Card.Body>
      </Card>
      </Container>
 </div>
  )
}
