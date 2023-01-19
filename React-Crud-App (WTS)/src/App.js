import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Adduser from './Components/Adduser'
import Alluser from './Components/Alluser';
import Notfound from './Components/Notfound';
import Edituser from './Components/Edituser';
import { Switch } from '@mui/material';
import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false)
  return (
    <>
   <Router>
          <Navbar />
          <Routes>
          {isAuth ? (<><div className="ui message brown">You are logged in..</div><button className="ui button blue" onClick={logout}>Logout</button></>):(<><div className="ui message violet">You are logged out..</div><button className="ui button blue" onClick={login}>Login</button></>)}
            <Switch>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-user" element={<Adduser />} />
            <ProtectedRoute exact path="/all-user" element={<Alluser />}  auth={ isAuth} />
            <Route exact path="/edit-user/:id" element={<Edituser />} />
            <Route exact path="*" element={<Notfound />} />
            </Switch>
            
          </Routes>

        </Router>
      
    </>
  );
}

export default App;
