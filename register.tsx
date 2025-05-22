import {AcUnitOutlined, Facebook, Google} from '@mui/icons-material';
import { 
    CssBaseline,
    Container,
    Box,
    Avatar,
    Typography,
    Paper,
    TextField,
    Checkbox,
    Grid,
    Button,
    Divider



 } from '@mui/material';
import './css/reset.css';
import { Link } from 'react-router-dom';


function register(){
    return (
        <> 
        <div className='main-window'>
            <CssBaseline />
            <Container maxWidth="xs">
                <Paper
                elevation={6}
                sx={{
                    borderRadius: 4,
                }}
                >
                <Box sx={{mt: 5, display:'flex', flexDirection:'column'}}>
                    <Box sx={{m: 3}}> 
                    <Box sx={{display: 'flex', m: 1}}> 
                        <Avatar sx={{bgcolor: 'primary.light'}}>
                            <AcUnitOutlined />
                        </Avatar>
                        <Typography variant='h5' color='primary.light' p={1} sx={{fontWeight: 'bold'}}> Sitemark</Typography>
                    </Box>
                    <Typography variant='h4' sx={{ml: 1, fontWeight: 'bold'}}> Sign up</Typography>
                    <Box sx={{m: 1}}>
                        <TextField 
                        required
                        autoFocus
                        fullWidth
                        margin="normal"
                        name="fullname"
                        id='fullname'
                        label='Full Name'
                        type='text'
                        />
                        <TextField 
                        required
                        fullWidth
                        margin="normal"
                        name="email"
                        id='email'
                        label='Email'
                        />
                        <TextField 
                        required
                        fullWidth
                        margin="normal"
                        name="password"
                        id='password'
                        label='Password'
                        />
                        <Grid container alignItems={'center'}>
                            <Grid  display={'flex'} alignItems={'center'}>
                                <Checkbox/>
                                I want to receive updates via email.
                            </Grid>
                        </Grid>
                        <Button
                        sx={{mt: 2, bgcolor: 'primary.dark'}}
                        variant='contained'
                        fullWidth
                        > Sign Up</Button>
                        <Box mt={2} sx={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                        {/* <Typography variant='body2'> or </Typography> */}
                        <Divider>or</Divider>
                        </Box>
                        <Button
                        sx={{mt: 1, textTransform: 'none', borderRadius: 2}}
                        variant='outlined'
                        fullWidth
                        startIcon={<Google />}
                        
                        >
                            Sign up with google </Button>
                        <Button
                        sx={{mt: 2, textTransform: 'none', borderRadius: 2, mb: 1}}
                        variant='outlined'
                        fullWidth
                        startIcon={<Facebook />}
                        > 
                        
                        Sign Up with Facebook </Button>
                    <Grid container justifyContent={'flex-end'}> 
                        <Typography variant='body2'>
                            Already have an account?{" "}
                            <Typography component="span" color='primary' sx={{cursor: 'pointer', textDecoration: 'none'}}><Link to="/login"> Sign in</Link></Typography>

                        </Typography>
                        </Grid>
                    </Box>

                </Box>
                </Box>
                </Paper>
            </Container>
        </div>
        </>
    )
}

export default register