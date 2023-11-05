import { setAppilication , setCurrApp } from "../slices/applicationSlice";
import toast from "react-hot-toast";

export const createApplication = (data,navigate,token)=>{

    return async()=>{

            const toastId = toast.loading("Creating");

            const url = 'http://localhost:5000/api/v1/application/createApplication'

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
            console.log(output);
            console.log("here also")
            toast.dismiss(toastId);
            navigate('/');

    }

}


export const getallApplications = (token)=>{

    return async(dispatch)=>{
        
        try{
            const toastId = toast.loading("Fetching");
            const url = 'http://localhost:5000/api/v1/application/getAllApplications';

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
            toast.dismiss(toastId);
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
        const url = 'http://localhost:5000/api/v1/application/apply';

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
            if(output.success==='True')
                toast.success("Apply Successfully",{
                    duration:4000
                })
            else toast.error("Cannot Send Application")
            navigate('/');
    }

}

export const deleteApp = (applicationId,token,navigate)=>{
    return async(dispatch)=>{

        try{

            const url = 'http://localhost:5000/api/v1/application/deleteApplication';

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

            navigate('/');
            toast.success("Application Deleted")

        }
        catch(err){
            console.log(err.message)
            navigate('/')
        }

    }
}
