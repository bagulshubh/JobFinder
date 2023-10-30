import { setUserDetails } from "../slices/profileSlice"
import { setToken } from "../slices/authSlice"
import { getUserDetails } from "./profile"

export const sendotp = async(email)=>{
    const  url = 'http://localhost:5000/api/v1/auth/sendotp'

    const res = await fetch (url,
        {
          method:'POST',
          headers: {
            'Content-type': 'application/json'
          },
          mode:'cors',
          body:JSON.stringify({email:email})
        }
        )
  
    const output =await res.json();
    console.log(output);
}

export const signup = (user,navigate)=>{

    return async()=>{
        const  url = 'http://localhost:5000/api/v1/auth/signup'

        const res = await fetch (url,
            {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            mode:'cors',
            body:JSON.stringify(user)
            }
            )
    
        const output =await res.json();
        console.log(output);
        navigate('/login');
    }
    
}

export function login(user,navigate){
    return async (dispatch)=>{
        const url = 'http://localhost:5000/api/v1/auth/login'

        const res = await fetch (url,
        {
            method:'POST',
            headers: {
            'Content-type': 'application/json'
            },
            mode:'cors',
            body:JSON.stringify(user)
        }
        )

        const output =await res.json();
        console.log(output);
        
        dispatch(setToken(output.token));
        localStorage.setItem("token", JSON.stringify(output.token))
        dispatch(getUserDetails(output.token,navigate));
        navigate('/');

    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      localStorage.removeItem("token")
      dispatch(setUserDetails(null));
      navigate('/');
    }
  }