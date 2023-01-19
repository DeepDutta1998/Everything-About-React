import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllUser = () => {
  const [user, setuser] = useState([])
  // const 

  useEffect(() => {
    loadusers();
  }, []);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result)
    setuser(result.data)
  }
  const deletuser = async (id)=>{
    await axios.delete(`http://localhost:3003/users/${id}`)
    loadusers();
  }
  return (
    <div style={{width:'100%',
    height:'540px',
    background:' #36D1DC',
    background: '-webkit-linear-gradient(to right, #5B86E5, #36D1DC)',  
    background: 'linear-gradient(to right, #5B86E5, #36D1DC)' }}>
      <h2>Users Table</h2>
      <table className="table border shadow" style={{width:"1200px", margin:'auto'}}>
  <thead className="table-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone no. </th>
      <th scope="col">Address</th>
      <th>Acitve</th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((value, index)=>(
        <tr>
            <th scope='row'>{value.id}</th>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.phone}</td>
            <td>{value.address}</td>
            <td>
            <a className="btn btn-success" href={`/view/edit/${value.id}`} role="button">Edit</a>
            <a className="btn btn-danger" onClick={()=>deletuser(value.id)} role="button">Delete</a>
            </td>
          </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}

export default AllUser
