import { LockOutlined } from "@mui/icons-material";
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
   const handleLogin = () => {
    if (!email.includes("@")) {
        setError("Invalid email address");
        return;
    }

    setError(""); // Clear previous errors

    // Proceed with login logic
    console.log("Logging in with", email, password);
};


    return (
        <>

            <Container maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    mt: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'primary.light'}}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'> Login </Typography>
                    <Box sx={{mt:1}}>
                        <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label="Email Address"
                        name = "email"
                        autoFocus
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        error = {Boolean(error)}
                        helperText={error}
                        
                        />
                        <TextField
                        margin='normal'
                        required
                        fullWidth
                        id="password"
                        name='password'
                        label="password"
                        type='password'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);

                        }}
                        />

                    <Button 
                        fullWidth
                        variant='contained'
                        sx={{mt:3, mb:2}}
                    onClick={handleLogin}
                > Login </Button>
                <Grid container justifyContent={'flex-end'}>
                    <Grid>
                        <Link to="/register"> Don't have an account? Register</Link>
                    </Grid>
                </Grid>
                    </Box>

                </Box>
            </Container>
        </>
    )
}

export default Login