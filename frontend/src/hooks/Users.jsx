
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "../components/ui/table";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Test",
          email: "test@gmail.com",
        }
      );
      console.log("User added:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/11"
      );
      console.log("User deleted:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    addUser();
    deleteUser();
  }, []);

  return (
    <div>
      <h1>User Names</h1>
      <hr />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
