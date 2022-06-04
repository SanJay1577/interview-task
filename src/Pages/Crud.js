import { Box, Button} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PostUser from '../Crud-component/PostUser'


const Crud = () => {
    const history = useHistory(); 
    const userInfo = localStorage.getItem("userInfo"); 
    useEffect(()=>{
        if(!userInfo){
            history.push("/"); 
        }
    }, [history, userInfo]); 

    const handleLogout = ()=>{
        localStorage.removeItem("userInfo"); 
        history.push("/");
    }
  return (
     <div style ={{width:"100%"}}>
           <Box 
           display="flex"
       justifyContent="space-between"
       height="max-content"
       padding="10px">
            <h2><b>CRUD</b></h2>
            <Button 
            colorScheme={"teal"}
            fontSize="10px"
            onClick={handleLogout}
            >Logout</Button>
           </Box>
           <Box>
             <PostUser/>
           </Box >
     </div>
  )
}

export default Crud