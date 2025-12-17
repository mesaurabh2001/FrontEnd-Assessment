"use client";

import AuthGuard from "@/components/AuthGuard";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Stack,
} from "@mui/material";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useUsersStore from "@/store/usersStore";

const UserDetailsPage = () => {

  const { selectedUser, loading, fetchUserById } = useUsersStore();

  const {id} = useParams();

  useEffect(() => {
    fetchUserById(id);
  }, [fetchUserById, id]);

  // const user = {
  //   id: params.id,
  //   name: "John Doe",
  //   email: "john@example.com",
  //   phone: "9876543210",
  //   gender: "Male",
  //   company: "Tech Corp",
  //   address: "New Delhi, India",
  // };

  return (
    <AuthGuard>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>

      {selectedUser && (
        <Card>
          <CardContent>
            {loading && <Typography>Loading user...</Typography>}

            {selectedUser && (
              <Stack spacing={1.5}>
                <Typography>
                  Name: {selectedUser.firstName} {selectedUser.lastName}
                </Typography>
                <Typography>Email: {selectedUser.email}</Typography>
                <Typography>Phone: {selectedUser.phone}</Typography>
                <Typography>Gender: {selectedUser.gender}</Typography>
                <Typography>Company: {selectedUser.company?.name}</Typography>
                <Typography>
                  Address: {selectedUser.address?.city}, {selectedUser.address?.state}
                </Typography>
              </Stack>
            )}
          </CardContent>
        </Card>
      )}

      <Box mt={3}>
        <Button variant="outlined" component={Link} href="/users">
          Back to Users
        </Button>
      </Box>
      </Container>
    </AuthGuard>
  );
};

export default UserDetailsPage;
