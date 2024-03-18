import './App.css';
import {Routes,Route} from  'react-router-dom';
import Home from './components/core/pages/Home';
import Navbar from './components/common/Navbar';
import LogIn from './components/core/auth/LogIn';
import Signup from './components/core/auth/Signup';
import Profile from './components/core/pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from './services/profile';
import { useEffect , useRef } from 'react';
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
import CommonError from './components/core/error/CommonError';
import Notification from './components/core/pages/Notification';
import {io} from 'socket.io-client'

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userDetails} = useSelector((state)=>(state.profile))
  const socket = useRef();

  useEffect(async() => {
   
    if (localStorage.getItem("token") !== undefined ||  localStorage.getItem("token") !== null ) {
      const token = JSON.parse(localStorage.getItem("token"))
      console.log(token);
      const user = await dispatch(getUserDetails(token, navigate))
      // here we can start a  connection
      //connectToSocket();
      socket.current = io("http://localhost:5000");
      socket.current.emit("add-user", user._id);
    }
    console.log(socket)
    
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

        <Route path='/candidates' element={<Candidates socket={socket}></Candidates>}></Route>

        <Route path='/update' element={<UpdateApp></UpdateApp>}></Route>
        
        <Route path='/delete' element={<DeleteApp></DeleteApp>}></Route>

        <Route path='/applied' element={<Applied></Applied>}></Route>

        <Route path='/saved' element={<Saved></Saved>}></Route>

        <Route path='/deleteProfile' element={<DeleteProfile></DeleteProfile>}></Route>

        <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>} ></Route>

        <Route path='/messages' element={<Message></Message>}></Route>

        <Route path='/error' element={<CommonError></CommonError>}></Route>

        <Route path='/notification' element={<Notification socket={socket}></Notification>}></Route>

      </Routes>
      
    </div>
  )
}

export default App
