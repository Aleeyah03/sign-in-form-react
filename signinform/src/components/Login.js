import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

    const paperStyle={
        padding: "20px",
        height: '70vh',
        width:280,
        margin: "20px auto"
    }
    const avatarStyle={backgroundColor:"green"}
    const textfield={padding: "10px"}
    const btnstyle={margin: '8px'}
    const Login=()=> {

    return(
        <Grid>
             <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar>
                        <LockIcon></LockIcon>
                        </Avatar>
                    <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter Username' fulwidth required></TextField>
                    <TextField label='Password' placeholder='Enter Password' type='Password' fullWidth required></TextField>
             <FormControlLabel
                 control={
                    <Checkbox
                     name='Checked'
                     color="primary"
                     />}
                  label='Remember me'
                  />

                  <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>

                  <Typography
                  style={textfield}>
                    <Link href='#'>
                        Don't have an account? Sign up
                    </Link>
                  </Typography>
        

             </Paper>

            </Grid>

    
    )
}


export default Login;