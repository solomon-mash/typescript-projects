import {
  Container,
  CssBaseline,
  
  Typography,
  Avatar,
  Button,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <CssBaseline />
      <Container 
         maxWidth="sm"
         sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
         }}
         >
            <Paper
               elevation={8}
               sx={{
                  p: 4,
                  textAlign:'center',
                  borderRadius: 4,
                  width: '100%',
               }}
            >
               <Avatar sx={{
                  m: "auto",
                  bgcolor: "success.light",
                  width: 64,
                  height: 64,
                  mb: 2,
                  animation: 'pulse 1.2s ease-in-out'
               }}
            >
               <CheckCircleOutline fontSize="large" />


               </Avatar>
               <Typography variant="h5" gutterBottom>
                   Email Sent!
               </Typography>
               <Typography variant="body1" sx={{mb: 3}}>
                              We've sent a password reset link to your email. Please check your inbox and follow the instructions.
               </Typography>
               <Button
               component={Link}
               to="/login"
               variant="contained"
               fullWidth
               sx={{mb: 1}}
               > 
               Back to Login
               </Button>
               <MuiLink
               component={Link}
               to="/reset"
               underline="hover"
               sx={{display: 'block', mt: 1}}
               > Didn't receive the email? Resend</MuiLink>
            </Paper>
      </Container>
      <style>
         {
            `
            @keyframes pulse{
            0% { transform: scale(0.95); opacity: 0.95;}
            50% {transform: scale(1.05); opacity: 1;}
            100% {transform: scale(1); opacity: 0.95;}
            }
            `
         }
      </style>
   </>
  );
};

export default Confirmation;
