import { setError } from "../slices/error"
import { setdata } from "../slices/countSlice"

const BaseUrl =  "http://localhost:5000/api/v1" //|| "https://jobfinder-ik40.onrender.com/api/v1"

export const getCount = (navigate)=>{

    return async(dispatch)=>{

        try{

            const url = `${BaseUrl}/count/getCount`


            const res = await fetch (url,
                {
                    method:'GET',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:null,
                }
            )

            const output = await res.json();
            console.log(output);
            if(output.success === "true"){
                console.log("Done",output.body);
                dispatch(setdata(output.body));
                
            }
            else{
                dispatch(setError(output.message));
                navigate("/error");
            }

        }
        catch(err){
            console.log("here")
            dispatch(setError(err.message));
            navigate("/error");
        }

    }

}

export const increaseCandidate = (navigate)=>{

    return async (dispatch)=>{

        try{
            const url = `${BaseUrl}/count/countCandidate`


            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:null,
                }
            )
     
            const output = await res.json();
            console.log(output);
            if(output.success === "true"){
                dispatch(setdata(output.body));
            }
            else{
                dispatch(setError(output.message));
                navigate("/error");
            }
            return output.body;
     
        }
        catch(err){
            dispatch(setError(err.message));
            navigate("/error")
            console.log(err.message);
        }

    }

}


export const decreaseCandidate = (navigate)=>{

    return async(dispatch)=>{

        try{
            const url = `${BaseUrl}/count/decreaseCandidate`

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:null,
                }
            )
     
            const output = await res.json();
            console.log(output);
            if(output.success === "true"){
                dispatch(setdata(output.body));
            }
            else{
                dispatch(setError(output.message));
                navigate("/error");
            }
            return output.body;
     
        } catch(err){
            dispatch(setError(err.message));
            navigate("/error")
            console.log(err.message);
        }

    }

}

export const increaseJob = (navigate)=>{

    return async(dispatch)=>{

        try{

            const url = `${BaseUrl}/count/countJob`

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:null,
                }
            )
     
            const output = await res.json();
            console.log(output);
            if(output.success === "true"){
                dispatch(setdata(output.body));
            }
            else{
                dispatch(setError(output.message));
                navigate("/error");
            }
            return output.body;

        } catch(err){
            dispatch(setError(err.message));
            navigate("/error")
            console.log(err.message)
        }

    }

}

export const decreaseJob = (navigate)=>{

    return async(dispatch) =>{

        try{

            const url = `${BaseUrl}/count/decreaseJob`

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:null,
                }
            )
     
            const output = await res.json();
            console.log(output);
            if(output.success === "true"){
                dispatch(setdata(output.body));
            }
            else{
                dispatch(setError(output.message));
                navigate("/error");
            }
            return output.body;

        } catch(err){
            dispatch(setError(err.message));
            navigate("/error")
            console.log(err.message);
        }

    }

}

export const increaseAccepted = (navigate)=>{

    return async(dispatch)=>{

        try{

            const url = `${BaseUrl}/count/countAccepted`

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:null,
                }
            )
     
            const output = await res.json();
            console.log(output);
            if(output.success === "true"){
                dispatch(setdata(output.body));
            }
            else{
                dispatch(setError(output.message));
                navigate("/error");
            }
            return output.body;

        } catch(err){
            dispatch(setError(err.message));
            navigate("/error")
            console.log(err.message);
        }


    }

}
