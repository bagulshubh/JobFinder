import { setUserDetails } from "../slices/profileSlice"
import { setToken } from "../slices/authSlice"
import { getUserDetails } from "./profile"
import toast from "react-hot-toast"

const BaseUrl =  "http://localhost:5000/api/v1" // || "https://jobfinder-ik40.onrender.com/api/v1"


export const sendotp = async(email)=>{
    const  url = `${BaseUrl}/auth/sendotp`
    const toastId = toast.loading("Sending..")
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
    toast.dismiss(toastId);
    toast.success("OTP Sent")
}

export const signup = (user,navigate)=>{

    return async(dispatch)=>{
        try{
            const toastId = toast.loading("Loading");
            const  url = `${BaseUrl}/auth/signup`

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
            toast.dismiss(toastId);
            toast.success("SignUp Successfull")
            navigate('/login');
        }
        catch(err){
            toast.error("Try again")
            console.log(err.message)
        }
    }
    
}

export function login(user,navigate){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading");
        const  url = `${BaseUrl}/auth/login`

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
        toast.dismiss(toastId);
        toast.success("Logged In")
        navigate('/');

    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      localStorage.removeItem("token")
      dispatch(setUserDetails(null));
      toast.success("Logged Out")
      navigate('/');
    }
  }