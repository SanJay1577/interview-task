import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../Authentication/Login'

const AuthPage = () => {
  return (
    <Container maxW="container.md" >
    <Box
    d="flex"
    justifyContent="center"
    p={3}
    bg="white"
    w="100%"
    m="40px 0 15px 0"
    borderRadius = "lg"
    borderWidth= "1px">
     <Text fontSize="4xl" 
     fontWeight="bolder"
     textAlign="center"
     color="teal">
      CRUD
     </Text>
    </Box>
    <Box  bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
    <Tabs isFitted variant="soft-rounded" colorScheme="teal">
     <TabList mb="1em">
       <Tab>Login</Tab>
     </TabList>
     <TabPanels>
       <TabPanel>
       <Login/>
       </TabPanel>
     </TabPanels>
   </Tabs>
    </Box>
</Container>
  )
}

export default AuthPage