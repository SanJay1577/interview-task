import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  deleteUserDetails,
  getUserDetails,
  postUserDetails,
  putUserDetails,
} from "../helper.js/crudHelper";

const PostUser = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [userDeatails, setUserDetails] = useState({
    name: "",
    age: "",
  });
  const toast = useToast();
  const [allUsers, setAllUsers] = useState([]);
  const { name, age } = userDeatails;

  const fetchAlluser = () => {
    getUserDetails()
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => {
        toast({
          title: "an error occured",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAlluser();
  }, []);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setUserDetails({ ...userDeatails, [name]: value });
  };

  const handleEdit = (user) => {
    setUserDetails({ ...userDeatails, name: user.name, age: user.age });
    setId(user._id);
  };

  const editTheUser = (event) => {
    event.preventDefault();
    setLoading(true);
    putUserDetails(userDeatails, id)
      .then((data) => {
        const index = allUsers.findIndex((user) => user._id === id);
        let editable = [...allUsers];
        editable[index] = userDeatails;
        setAllUsers(editable);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "an error occured",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log(err);
      });
  };

  const handleDelete = (idx) => {
    deleteUserDetails(idx)
      .then((data) => {
        const newUser = allUsers.filter((user) => user._id !== idx);
        setAllUsers(newUser);
      })
      .catch((err) => {
        toast({
          title: "an error occured",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    postUserDetails(userDeatails)
      .then((data) => {
        setAllUsers([...allUsers, data]);
        setLoading(false);
        setUserDetails({ ...userDeatails, name: "", age: "" });
      })
      .catch((err) => {
        toast({
          title: "an error occured",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        console.log(err);
      });
  };
  return (
    <Box>
      <Box>
        <VStack
          w="80%"
          paddingLeft={"10%"}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          textAlign={"center"}
        >
          <FormControl>
            <FormLabel>Enter Your Name</FormLabel>
            <Input
              type="text"
              required
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handleChange("name")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Enter Your Age</FormLabel>
            <Input
              type="number"
              required
              placeholder="Enter Your age"
              value={age}
              onChange={handleChange("age")}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            width="100%"
            style={{ marginTop: 15 }}
            isLoading={loading}
            onClick={handleSubmit}
          >
            Add user
          </Button>

          <Button
            colorScheme="yellow"
            width="100%"
            style={{ marginTop: 15 }}
            isLoading={loading}
            onClick={editTheUser}
          >
            Edit User
          </Button>
        </VStack>
      </Box>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allUsers &&
                allUsers.map((user, idx) => (
                  <Tr key={idx}>
                    <Td>{user.name}</Td>
                    <Td>{user.age}</Td>
                    <Td>
                      <Button
                        size="sm"
                        colorScheme={"yellow"}
                        fontSize={"10px"}
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        size="sm"
                        colorScheme={"red"}
                        fontSize={"10px"}
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PostUser;
