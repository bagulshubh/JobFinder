
import { setToken } from "../slices/authSlice"


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
    console.log(user);
}

export const signup = async(user)=>{
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
}

export function logout() {
    return (dispatch) => {
      dispatch(setToken(null))
    }
  }