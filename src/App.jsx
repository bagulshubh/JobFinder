import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './components/core/pages/Home';
import Navbar from './components/common/Navbar';
import LogIn from './components/core/auth/LogIn';
import Signup from './components/core/auth/Signup';
import Profile from './components/core/pages/Profile';
import { useDispatch } from 'react-redux';
import { getUserDetails } from './services/profile';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Discover from './components/core/pages/Discover';
import Listing from './components/core/pages/Listing';
import CreateListing from './components/core/pages/CreateListing';
import ViewApplication from './components/common/ViewApplication';
import Candidates from './components/core/application/Candidates';
import DeleteApp from './components/core/application/DeleteApp';
import Contact from './components/core/pages/Contact';
import About from './components/core/pages/About';
import UpdateApp from './components/core/pages/UpdateApp';
import Applied from './components/core/pages/Applied';
import Saved from './components/core/pages/Saved';
import DeleteProfile from './components/core/profile/DeleteProfile';
import UpdateProfile from './components/core/profile/UpdateProfile';
import Message from './components/core/message/Message';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
   
    if (localStorage.getItem("token") !== undefined) {
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

        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/aboutus' element={<About></About>}></Route>

        <Route path='/login' element={<LogIn></LogIn>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/profile' element={<Profile></Profile>}></Route>

        <Route path='/discover' element={<Discover></Discover>}></Route>

        <Route path='/listing' element={<Listing></Listing>}></Route>

        <Route path='/createListing' element={<CreateListing></CreateListing>}></Route>

        <Route path='/viewApplication' element={<ViewApplication></ViewApplication>}></Route>

        <Route path='/candidates' element={<Candidates></Candidates>}></Route>

        <Route path='/update' element={<UpdateApp></UpdateApp>}></Route>
        
        <Route path='/delete' element={<DeleteApp></DeleteApp>}></Route>

        <Route path='/applied' element={<Applied></Applied>}></Route>

        <Route path='/saved' element={<Saved></Saved>}></Route>

        <Route path='/deleteProfile' element={<DeleteProfile></DeleteProfile>}></Route>

        <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>} ></Route>

        <Route path='/messages' element={<Message></Message>}></Route>

      </Routes>
      
    </div>
  )
}

export default App
