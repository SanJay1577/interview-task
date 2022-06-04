import { API } from "../api"
const postUserDetails = async(userDetails)=>{
    const response = await fetch(`${API}/details`, {
        method:"POST",
        body:JSON.stringify(userDetails),
        headers:{
            "Content-Type":"application/json",
        },
    }); 
    const data = await response.json(); 
    return data; 
}; 

const putUserDetails = async(userDetails, userId)=>{
    const response = await fetch(`${API}/details/${userId}`, {
        method:"PUT",
        body:JSON.stringify(userDetails),
        headers:{
            "Content-Type":"application/json",
        },
    }); 
    return response; 
}; 

const deleteUserDetails = async(userId)=>{
    const response = await fetch(`${API}/details/${userId}`, {
        method:"DELETE",
    }); 
return response; 
}; 

const getUserDetails = async(userDetails)=>{
    const response = await fetch(`${API}/details`, {
        method:"GET",
    }); 
    const data = await response.json(); 
    return data; 
}; 

const getSelectedUserDetails = async(userId)=>{
    const response = await fetch(`${API}/details/${userId}`, {
        method:"GET",
    }); 
    const data = await response.json(); 
    return data; 
}; 
export {postUserDetails,getSelectedUserDetails, getUserDetails, putUserDetails, deleteUserDetails }; 