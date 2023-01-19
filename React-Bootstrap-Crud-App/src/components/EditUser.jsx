import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { editUser,getUser } from '../service/Api';
import { useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container,Card } from 'react-bootstrap'
const initialvalue = {
  name: '',
  email: '',
  phone: '',
  city: '',
  state:''
}

export const EditUser = () => {
  const[user, setUser]=useState(initialvalue)
  //const { name, email, phone, city, state } = user;
  const {id}=useParams()
  const navigate = useNavigate()
  const [error, setError] = useState({})
  const validation = () => {
    let error = {};
    if (!user.name) {
      error.name = "Name is Required";
    }
    if (!user.email) {
      error.email = "Email is required"
    }
    if (!user.city) {
      error.city = "City is required"
    }
    if (!user.phone) {
      error.phone = "Phone is required"
    }
    if(!user.state){
      error.state = "State is required"
    }
      
    return error;

  };

  useEffect(()=>{
      loadUserData()
  },[])

  const loadUserData= async (id)=>{
    const response = await getUser(id);
    setUser(response.data);
  } 

    let name,value
  const onValueChange=(e)=>{
   // console.log(e.target.value);
    //setUser({...user,[e.target.name]:e.target.value})
    //console.log(user);
    name = e.target.name;
    value = e.target.value;
    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "Name is Required" });
        setUser({
          ...user,
          name: "",
        });
      } else {
        setError({ ...error, name: "" });
        setUser({
          ...user,
          name: value,
        });
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setUser({
          ...user,
          email: "",
        });
      } else {
        setError({ ...error, email: "" });
        setUser({
          ...user,
          email: value,
        });
      }  
    }
    if (name === "city") {
      if (value.length === 0) {
        setError({ ...error, city: "city is Required" });
        setUser({
          ...user,
          city: "",
        });
      } else {
        setError({ ...error, city: "" });
        setUser({
          ...user,
          city: value,
        });
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "Phone is Required" });
        setUser({
          ...user,
          phone: "",
        });
      } else {
        setError({ ...error, phone: "" });
        setUser({
          ...user,
          phone: value,
        });
      }
    }  
    if (name === "state") {
      if (value.length === 0) {
        setError({ ...error, state: "state is Required" });
        setUser({
          ...user,
          state: "",
        });
      } else {
        setError({ ...error, state: "" });
        setUser({
          ...user,
          state: value,
        });
      }
    }  
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length === 0) {
      let reg = {
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        state:user.state
      };
      console.log(reg);
   } 
   await editUser(id,user)
   navigate('/all-user')
   
 }
  return (
    <div>
        < Container className='p-3'>
        <h1>Edit User</h1>
        <Card>
        <Card.Body>
        <Form className='w-23 py-3' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            
            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={onValueChange} value={user.name} />
            <span style={{ color: "red" }}>
                      {error.name}
                    </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={onValueChange} value={user.email}/>
            <span style={{ color: "red" }}>
                      {error.email}
                    </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
         
            <Form.Control type="number" placeholder="Enter Phone" name="phone" onChange={onValueChange} value={user.phone}/>
            <span style={{ color: "red" }}>
                      {error.phone}
                    </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
          
            <Form.Control type="text" placeholder="Enter city" name="city" onChange={onValueChange} value={user.city}/>
            <span style={{ color: "red" }}>
                      {error.city}
                    </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
          
            <Form.Control type="text" placeholder="Enter state" name="state" onChange={onValueChange} value={user.state}/>
            <span style={{ color: "red" }}>
                      {error.state}
                    </span>
          </Form.Group>
          <Button className='btn btn-block' variant="warning" type="submit">
            Update User
          </Button>
          
        </Form>
        </Card.Body>
        </Card>
      </Container>
        
    </div>
  )
}
