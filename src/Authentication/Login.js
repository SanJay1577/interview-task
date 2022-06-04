import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from '../helper.js/authHelper';

const Login = () => {
    const [show, setShow] = useState(true); 
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email:"", 
        password:""}); 
    const history = useHistory(); 
  const handleShow = ()=>setShow(!show); 

  const {email, password} = userInfo; 

  const handleChange = (name)=>(event)=>{
    const value = event.target.value; 
    setUserInfo({...userInfo, [name]:value}); 
  }

const handleSubmit=(event)=>{
  event.preventDefault(); 
  setLoading(true);
  loginUser(userInfo).then((data)=>{
      localStorage.setItem("userInfo", JSON.stringify(data)); 
      setLoading(false); 
      history.push("/crud"); 
  }).catch((err)=>console.Console.log(err)); 
}


  return (
    <VStack spacing="5px">
    <FormControl id="email" isRequired>
      <FormLabel>Enter Your Email</FormLabel>
      <Input
        type="email"
        value={email}
        onChange={handleChange("email")}
        placeholder="Enter Your Name"
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          value={password}
          onChange={handleChange("password")}
          placeholder="Enter Your Password"
        />
        <InputRightElement width="4rem">
          <Button h="1.75rem" size="sm" bg="white" onClick={handleShow}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button
      colorScheme="teal"
      width="100%"
      style={{ marginTop: 15 }}
      isLoading={loading}
      onClick={handleSubmit}
    >
      Login
    </Button>
  </VStack>
  )
}

export default Login