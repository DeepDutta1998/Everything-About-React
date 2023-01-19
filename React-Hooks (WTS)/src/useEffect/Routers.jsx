import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Album from './API/Album'
import ApiPostDetails from './API/ApiPostDetails'
import PostDetails from './API/PostDetails'

const Routers = () => {
  return (
    <div>
        <Router>
            <Routes>
                {/* <Route path='/' element={<Album/>}></Route> */}
                <Route path='/' element={<ApiPostDetails/>}></Route>
                <Route path='/postdetails/:id' element={<PostDetails/>}></Route>
            </Routes>
        </Router>
      
    </div>
  )
}

export default Routers
