"use client";
import {useState} from 'react';
import axios from "axios";
import useAuthStore from '../../store/authStore';
import {useRouter} from "next/navigation";


import { Button, TextField, Container, Typography, Box } from "@mui/material";

const LoginPage = () => {

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username,
          password
        }
      );

      login(res.data);
      
      router.push("/");
      
    }catch (err) {
      
      console.log(err);
      setError("Invalid UserName or Password");
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Username"
          margin="normal"
          
          value={username}
          onChange={ (e) => setUsername(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"

          value={password}
          onChange={( (e) => setPassword(e.target.value))}
        />
        
        {error && (
          <Typography color="red" mt={1}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
