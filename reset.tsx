import { LockOpenOutlined } from "@mui/icons-material";
import {
    Avatar,
    Container,
    Box,
    Grid,
    CssBaseline,
    Typography,
    TextField,
    Button,
    
}from "@mui/material";
import {Link} from 'react-router-dom';
import {useState} from 'react';


const Reset =()=>{
    const [email, setEmail]=useState("");
    
    const [error, setError]=useState("");
    const handleLogin=()=>{
        if(!email.includes('@')){
            setError("Invalid Email Address")
            return;
        }

        setError("");
        console.log("Email Sent to: ",email)
        
    }
    return (
        <>
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                mt: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <Avatar sx={{m: 1,bgcolor: 'primary.light'}}>
                <LockOpenOutlined />
            </Avatar>
            <Typography variant="h5"> Reset your Password </Typography>
            <Box sx={{mt: 1}}>

            <TextField
            required
            fullWidth
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            error = {Boolean(error)}
            helperText={error}
            />

            <Button 
                component = {Link}
                to="/resetConfirm"
                fullWidth
                onClick={handleLogin}
                variant="contained"
                sx={{mt:3, mb:2}}

> Send Reset Email</Button>

<Grid container justifyContent={'flex-end'}>
    <Grid>
        <Link to="/login"> Login </Link>
    </Grid>
</Grid>
            </Box>
            </Box>
        </Container>
        </>
    )
}

export default Reset