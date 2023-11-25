import { setUserDetails } from "../slices/profileSlice"
import { setToken, setloading } from "../slices/authSlice"
import { getUserDetails } from "./profile"
import toast from "react-hot-toast"
import { setError } from "../slices/error"

const BaseUrl = "http://localhost:5000/api/v1" // || "https://jobfinder-ik40.onrender.com/api/v1"


export const sendotp = (email, setloading, navigate) => {
    return async (dispatch) => {
        try {
            setloading(true);
            const url = `${BaseUrl}/auth/sendotp`

            const res = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify({ email: email })
                }
            )

            const output = await res.json();
            if (output.success !== true) {
                dispatch(setError(output.message || output.error));
                setloading(false);
                navigate("/error");
                console.log(output);
            }
            else {
                console.log(output);
                toast.success("OTP Sent")
                setloading(false);
            }
        }
        catch (err) {
            dispatch(setError(err.message));
            setloading(false);
            navigate("/error");
            console.log(output);
        }

    }



}

export const signup = (user, navigate, setloading) => {

    return async (dispatch) => {
        try {
            setloading(true)

            const url = `${BaseUrl}/auth/signup`

            const res = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(user)
                }
            )

            const output = await res.json();

            if (output.success !== true) {
                toast.error("Cannot Signup");
                dispatch(setError(output.message || output.error));
                setloading(false);
                navigate('/error');
            }
            else {
                toast.success("SignUp Successfull")
                setloading(false);
                navigate('/login');
            }

            console.log(output);


        }
        catch (err) {
            toast.error("Try again")
            dispatch(setError(output.message || output.error));
            setloading(false);
            navigate('/error');
            console.log(err.message)
        }
    }

}

export function login(user, navigate,setloading) {
    return async (dispatch) => {
        try {
            setloading(true);
            
            const url = `${BaseUrl}/auth/login`

            const res = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(user)
                }
            )

            const output = await res.json();
            console.log(output);

            if(output.success!==true){
                //this is false cases
                dispatch(setError(output.message || output.error));
                setloading(false);
                navigate("/error");
            }
            else{
                dispatch(setToken(output.token));
                localStorage.setItem("token", JSON.stringify(output.token))
                dispatch(getUserDetails(output.token, navigate));
                toast.success("Logged In")
                setloading(false);
                navigate('/');
            }

           
            

        }
        catch (err) {
            toast.error("Try Again")
            dispatch(setError("Error Try Again"))
            setloading(false);
            navigate("/error");
        }

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