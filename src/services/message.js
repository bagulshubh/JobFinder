const BaseUrl =  "http://localhost:5000/api/v1" //|| "https://jobfinder-ik40.onrender.com/api/v1"
import toast from "react-hot-toast";

export const createSocket = (senderId,reciverId,navigate)=>{

    return async()=>{

        try{

            const url = `${BaseUrl}/chat/createChat`;
            
            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        senderId:senderId,
                        reciverId:reciverId
                    }),
                }
            )

            const output = await res.json();
            console.log(output);

            if(output.success === "True"){
                toast.success("Candidate Accepted");
                navigate("/");
            }
            else{
                toast.error("Try Again");
            }

        }
        catch(err){
            console.log(err.message  + "Cannot create socket");
            navigate("/");
        }

    }

}

export const sendMessage = (senderId,chatId,body,navigate)=>{
    return async()=>{

        try{

            const url = `${BaseUrl}/chat/sendMessage`;
            
            const res = await fetch (url,
                {
                    method:'POST',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    mode:'cors',
                    body:JSON.stringify({
                        senderId:senderId,
                        chatId:chatId,
                        body:body,
                    }),
                }
            )

            const output = await res.json();
            console.log(output);

            if(output.success==="True"){
                toast.success("Sent");
                navigate("/")
                window.location.reload(false);
                
            }
            else{
                toast.error("Try sending again");
            }

        }
        catch(err){
            console.log(err.message);
        }

    }
}