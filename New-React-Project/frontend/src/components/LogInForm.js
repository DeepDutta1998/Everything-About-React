import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LogInForm() {
    const [uid, setUid] = useState('deepinslg@gmail.com');
    const [pwd, setPwd] = useState('12345678');

    const navigate = useNavigate();
    
    function handleSubmit(e) {
      // To stop default form submission

      e.preventDefault();

      let p = axios.post("http://localhost:4000/login", {uid, pwd})
      console.log(typeof(p));
      p.then(res => {
          console.log(res.data);
          navigate('/home/' + uid + "/" + res.data.name);
        });
    }

    return (
        <Form className='w-25 py-3 mx-auto' onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={uid} 
    onChange={e => setUid(e.target.value)}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={pwd} 
    onChange={e => setPwd(e.target.value)}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    login
  </Button>
</Form>
    );
}