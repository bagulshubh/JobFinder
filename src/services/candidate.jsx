

export const getCandidateInfo = (id,token,setdata)=>{

    return async(dispatch)=>{

        try{
            const url = 'http://localhost:5000/api/v1/profile/getUserDetails'


            const res = await fetch (url,
                {
                    method:'GET',
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    userId:`${id}`,
                    },
                    mode:'cors',
                    body:null,
                }
            )

            const output= await res.json()
            console.log(output);
            setdata(output.body);
        }
    
        catch(err){
            console.log(err);
        }


    }

}