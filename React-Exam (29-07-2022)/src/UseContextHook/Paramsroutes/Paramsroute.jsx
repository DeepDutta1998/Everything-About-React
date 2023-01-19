import React from 'react'
import Navbar from './layout/Navbar'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import CounterState from '../Contex-Api/CounterState'

const Paramsroute = () => {
  return (
    <div>
     <CounterState>
        <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            
        </Routes>
        </Router>
        </CounterState>
       
    </div>
  )
}

export default Paramsroute
