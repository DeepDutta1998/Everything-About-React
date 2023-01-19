import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserState from '../UserState'
import Navbar from './Nav/Navbar'
import Home from './Pages/Home'
import User from './Pages/User'

const Routerss = () => {
  return (
    <div>
        <UserState>
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/user' element={<User/>}></Route>
            </Routes>
        </Router>
        </UserState>
    </div>
  )
}

export default Routerss
