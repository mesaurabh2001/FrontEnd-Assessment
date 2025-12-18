"use client";

import {
  Container,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";

import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";

import { useEffect, useState } from "react";
import useUsersStore from "@/store/usersStore";


const UsersPage = () => {

  const { users, total, loading, fetchUsers } = useUsersStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, search]);

  const filteredUsers  = users.filter( user => (
    `${user.firstName} ${user.lastName}`.toLowerCase()
    .includes(search.toLowerCase())
  ))

  // const dummyUsers = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john@example.com",
  //     gender: "Male",
  //     phone: "9876543210",
  //     company: "Tech Corp",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane@example.com",
  //     gender: "Female",
  //     phone: "9123456780",
  //     company: "Innovate Ltd",
  //   },
  // ];

  return (
    <AuthGuard>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">Users</Typography>

        <TextField 
          label="Search Name" 
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}

        ></TextField>
      </Box>

      {loading && (
        <Typography mb={2}>Loading users...</Typography>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Company</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName} {user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.company.name}</TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    href={`/users/${user.id}`}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </AuthGuard>
  );
};

export default UsersPage;
