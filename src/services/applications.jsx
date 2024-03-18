import { setAppilication , setCurrApp } from "../slices/applicationSlice";
import toast from "react-hot-toast";
import {increaseJob,decreaseJob} from './count'

const BaseUrl =  "http://localhost:5000/api/v1" //|| "https://jobfinder-ik40.onrender.com/api/v1"


export const createApplication = (data,navigate,token)=>{

    return async(dispatch)=>{

            const toastId = toast.loading("Creating");
            
            const url = `${BaseUrl}/application/createApplication`

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify(data),
                }
            )
            console.log("till here")
            const output = await res.json();

            if(output.success === "True" || output.success === "true" || output.success === true){
                //have to call count 
                dispatch(increaseJob(navigate));
            }

            console.log(output);
            console.log("here also")
            toast.dismiss(toastId);
            navigate('/');
            window.location.reload(false);

    }

}


export const getallApplications = (token,setloading)=>{

    return async(dispatch)=>{
        
        try{
            setloading(true);
            const url = `${BaseUrl}/application/getAllApplications`;

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
            console.log(output);
            dispatch(setAppilication(output.body));
            setloading(false);
        }
        catch(err){
            console.log(err.message);
        }

    }

}


export const setApplication = (app,navigate)=>{

    return async (dispatch)=>{
        try{

            const toastId = toast.loading("Loading");
            //call methond to set application from slices
            dispatch(setCurrApp(app));
            console.log(app)
            toast.dismiss(toastId);
            navigate('/viewApplication')
            

        }
        catch(err){
            console.log(err.message);
            navigate('/')
        }
    }

}


export const apply = (applicationId,userId,token,navigate)=>{

    return async()=>{
        const toastId = toast.loading("Loading")
        const url = `${BaseUrl}/application/apply`;

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        applicationId:applicationId,
                        userId:userId,
                    }),
                }
            )

            const output = await res.json();
            console.log(output);
            toast.dismiss(toastId)
            if(output.success==='True'){
                toast.success("Apply Successfully",{
                    duration:4000
                })
                
            }
            else toast.error("Cannot Send Application")
            navigate('/');
            window.location.reload(false);


    }

}


export const updateApp = (data,token,navigate)=>{

    return async()=>{

        try{
            const toastId = toast.loading("Updating");
            console.log("into dispatch" , data.id);
            const url = `${BaseUrl}/application/updateApplication`;

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
            console.log(res);
            toast.dismiss(toastId);
            if(res.success==="True" || res.status===200){
                toast.success("Updated Successfully");
            }
            else{
                toast.error("Try again");
            }

            navigate("/");
            window.location.reload(false);

        }
        catch(err){
            console.log(err.message);
            navigate("/");
        }

    }

}

export const save = (applicationId,userId,token)=>{
    return async()=>{

        try{

            const url = `${BaseUrl}/application/save`;

            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        applicationId:applicationId,
                        id:userId,
                    }),
                }
            )
            console.log(res);
            if(res.status !=="False" ){
                toast.success("Saved")
            }

        }
        catch(err){
            console.log(err.message);
            toast.error("Try again");
        }

    }
}

export const withdraw = (applicationId,userId,token,navigate)=>{

    return async()=>{

        try{

            const url = `${BaseUrl}/application/withdrawApplication`;
            
            const res = await fetch (url,
                {
                    method:'PUT',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        applicationId:applicationId,
                        userId:userId,
                    }),
                }
            )
            const output = await res.json();
            console.log(output)

            if(output.success==="True"){
                toast.success("Withdrawn");
                navigate("/");
                window.location.reload(false);   
            }
            else{
                toast.error("Try Again");
                navigate("/");
            }


        }
        catch(err){
            console.log(err.message);
            navigate("/");
        }

    }

}


export const unsave = (applicationId, userId,token,navigate)=>{
    return async()=>{

        try{

            const url = `${BaseUrl}/application/unsave`;
            
            const res = await fetch (url,
                {
                    method:'PUT',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        applicationId:applicationId,
                        userId:userId,
                    }),
                }
            )
            const output = await res.json();
            console.log(output);

            if(output.success==="True"){
                toast.success("Unsaved");
                navigate("/");
                window.location.reload(false);   
            }
            else{
                toast.error("Try again");
                navigate("/");
            }
            
        }
        catch(err){
            console.log(err.message);
            navigate("/");
        }

    }
}


//need some changes in backend to handle delete of foreing keys
export const deleteApp = (applicationId,token,navigate)=>{
    return async(dispatch)=>{

        try{

            const url = `${BaseUrl}/application/deleteApplication`;
            console.log(applicationId)
            const res = await fetch (url,
                {
                    method:'DELETE',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        applicationId:applicationId,
                    }),
                }
            )
            const output = await res.json();
            console.log(output)
            dispatch(decreaseJob(navigate));
            navigate('/');
            toast.success("Application Deleted")
            window.location.reload(false);

        }
        catch(err){
            console.log(err.message)
            navigate('/')
        }

    }
}


