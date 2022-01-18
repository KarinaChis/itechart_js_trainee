import React from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../theme';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const useStyles = makeStyles((theme) => ({
    paperStyle: {...theme.authPaperStyle},
    avatarStyle: {
        ...theme.authAvatarStyle,
        backgroundColor: theme.palette.success.main,
    },
}))

const Login = ({ handleChange }) => {

    const classes = useStyles()

    return(
        <Grid>
            <Paper className={classes.paperStyle}>
                <Grid align="center">
                    <Avatar className={classes.avatarStyle} sx={{backgroundColor: theme.palette.auth}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    variant="standard"
                    label="Username" 
                    placeholder="Enter username" 
                    fullWidth 
                    required
                />
                <TextField 
                    variant="standard"
                    label="Password" 
                    placeholder="Enter password" 
                    type="password"
                    fullWidth 
                    required
                />
                <Button type="submit" fullWidth variant="contained" sx={{margin: "15px 0"}}>
                    SIGN IN
                </Button>
                <Typography> Or click
                    <Link href="#" onClick={() => handleChange("event", 1)}> here </Link>
                    to create new account
                </Typography>
                
            </Paper>

        </Grid>
    )
}

export default Login;