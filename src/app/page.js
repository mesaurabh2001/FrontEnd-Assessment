"use client";

import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

import Link from "next/link";
import AuthGuard from "@/components/AuthGuard";

import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

const DashboardPage = () => {

  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  
  return (
    <AuthGuard>
      <Container maxWidth="md" sx={{mt: 6}}>

        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Logout
        </Button>

        <Typography variant="h4" gutterBottom align="center">
          Dashboard
        </Typography>

        <Grid container spacing={4} mt={2}>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>

                <Typography variant="h6" gutterBottom>
                  Users
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View and manage users
                </Typography>

                <Button variant="contained"
                  sx={{mt: 2}}
                  component={Link}
                  href="/users"
                >
                  Go to Users
                </Button>
                
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                
                <Typography variant="h6" gutterBottom>
                  Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse and manage products
                </Typography>

                <Button variant="contained"
                  sx={{mt: 2}}
                  component={Link}
                  href="/products"
                >
                  Go to Products
                </Button>
                
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </AuthGuard>
  );

}

export default DashboardPage;