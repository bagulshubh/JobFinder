import { setUserDetails } from "../slices/profileSlice"


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
            navigate('/');
        }


    }
}




