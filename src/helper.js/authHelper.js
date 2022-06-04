import { API } from "../api"

const loginUser = async (userInfo)=>{
    const response = await fetch(`${API}/users`, {
        method:"POST",
        body:JSON.stringify(userInfo),
        headers:{
            "Content-Type":"application/json",
        },
    }); 
    const data = await response.json(); 
    return data; 
}

export {loginUser}; 