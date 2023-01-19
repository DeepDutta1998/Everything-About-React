import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PagenotFound from './pages/PagenotFound'

const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Menu/>}></Route>
          <Route path='/About/:id/:name' element={<About/>}></Route>
          <Route path='*' element={<PagenotFound/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </Router>

      
    </div>
  )
}

export default Home
