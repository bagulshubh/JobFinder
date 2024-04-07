import { setUserDetails } from "../slices/profileSlice"
import { setToken } from "../slices/authSlice"
import { decreaseCandidate } from "./count"
import toast from "react-hot-toast"

const BaseUrl =  "https://jobfinder-ik40.onrender.com/api/v1"

export const deleteProfile = (userId,profileId,token,navigate)=>{

    return async(dispatch)=>{

        try{

            const url = `${BaseUrl}/profile/deleteProfile`
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
                dispatch(decreaseCandidate(navigate));
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
            const url = `${BaseUrl}/profile/getUserDetails`
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
            return output.body;
        }
        catch(err){
            console.log(err.message);
        }


    }
}


export const updateProfile = (userId,token,navigate,data)=>{
    return async()=>{

        try{

        const url = `${BaseUrl}/profile/updateProfile`
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

export const updateDisplayPicture=(token, formData,navigate)=> {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      try {

        const url = `${BaseUrl}/profile/updateImage`
        const res = await fetch (url,
            {
                method: 'PUT',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                mode: 'cors',
                body: formData,
            }
        )
        
        const output = await res.json();
        console.log(output);
        
        if(output.success===true){
            toast.success("Display Picture Updated Successfully")
            navigate("/");
            window.location.reload(false);
        }
        else{
            toast.error("Try Again");
        }
        
      } 
      catch (error) {
        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
        toast.error("Could Not Update Display Picture")
      }
      toast.dismiss(toastId)
    }
  }