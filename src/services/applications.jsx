import { setAppilication } from "../slices/applicationSlice";


export const createApplication = (data,navigate,token)=>{

    return async()=>{

       

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
            navigate('/');

    }

}


export const getallApplications = (token)=>{

    return async(dispatch)=>{
        
        try{
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

        }
        catch(err){
            console.log(err.message);
        }

    }

}







