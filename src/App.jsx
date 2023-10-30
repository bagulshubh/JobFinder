import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';
import LogIn from './components/core/auth/LogIn';
import Signup from './components/core/auth/Signup';
import Profile from './components/pages/Profile';
import { useDispatch } from 'react-redux';
import { getUserDetails } from './services/profile';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      console.log(token);
      dispatch(getUserDetails(token, navigate))
    }
    
  }, [])

  return (
    <div className='app'>
      <Navbar></Navbar>

      <Routes>

        <Route path='/' element = {<Home></Home>}></Route>

        <Route path='/login' element={<LogIn></LogIn>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/profile' element={<Profile></Profile>}></Route>

      </Routes>
      
    </div>
  )
}

export default App
