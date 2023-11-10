import { setUserDetails } from "../slices/profileSlice"
import { setToken } from "../slices/authSlice"
import toast from "react-hot-toast"


export const deleteProfile = (userId,profileId,token,navigate)=>{

    return async(dispatch)=>{

        try{

            const url = 'http://localhost:5000/api/v1/profile/deleteProfile'
            const res = await fetch (url,
                {
                    method:'DELETE',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        userId:userId,
                        profileId:profileId,
                    }),
                }
            )
            
            
            const output = await res.json();
            console.log(output.body);

            if(output.success==="True"){
                toast.success("Profile Deleted");
                navigate("/");
                dispatch(setToken(null));
                dispatch(setUserDetails(null));
                window.location.reload(false);
            }
            else{
                toast.error("Try Again");
                navigate("/");
            }

        }
        catch(err){
            console.log(err.message);
        }

    }

}

export const getUserDetails = (token,navigate)=>{
    return async(dispatch)=>{

        try{
            const url = 'http://localhost:5000/api/v1/profile/getUserDetails'
            const res = await fetch (url,
                {
                    method:'GET',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:null,
                }
            )
            
            
            const output = await res.json();
            console.log(output.body);

            dispatch(setUserDetails({ ...output.body}));

        }
        catch(err){
            console.log(err.message);
        }


    }
}


export const updateProfile = (userId,token,navigate,data)=>{
    return async()=>{

        try{

            const url = 'http://localhost:5000/api/v1/profile/updateProfile'
            const res = await fetch (url,
                {
                    method:'PUT',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify(data),
                }
            )

            const output = await res.json();

            console.log(output);

            if(output.success === true){
                navigate("/");
                toast.success("Updated")
                window.location.reload(false);
            }   
            else{
                toast.error("Try again");
            }

        }
        catch(err){
            console.log(err.message);
            navigate("/");
        }


    }
}

