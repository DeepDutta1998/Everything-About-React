import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AddUser from './Components/Pages/AddUser';
import AllUser from './Components/Pages/AllUser';
import PageNot from './Components/Pages/PageNot';
import Edit from './Components/Pages/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes >
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/add' element={<AddUser/>}></Route>
          <Route path='/view' element={<AllUser/>}></Route>
          <Route path='/view/edit/:id'  element={<Edit/>}></Route>
          <Route path='*' element={<PageNot/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
