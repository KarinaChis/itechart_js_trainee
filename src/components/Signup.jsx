import { Avatar, Grid, Button, Paper, TextField, } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from '@mui/styles';
import React from "react";
import { theme } from '../theme';

const useStyles = makeStyles((theme) => ({
    paperStyle: {...theme.authPaperStyle},

}))

const Signup = () => {

    const classes = useStyles();

    return (
        <Grid>
            <Paper className={classes.paperStyle}>
                <Grid align="center">
                    <Avatar className={classes.avatarStyle} sx={{backgroundColor: theme.palette.auth}}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2>Sign up</h2> 
                    {/* <Typography variant="caption">Please fill this form to create an account!</Typography> */}
                </Grid>
                <form>
                    <TextField 
                        variant="standard"
                        label="Name" 
                        placeholder="Enter your name" 
                        fullWidth 
                        required
                    />
                    <TextField 
                        variant="standard"
                        label="Last name" 
                        placeholder="Enter your last name" 
                        fullWidth 
                        required
                    />
                    <TextField 
                        variant="standard"
                        label="Email" 
                        placeholder="Enter your email" 
                        fullWidth 
                        required
                    />
                    <TextField 
                        variant="standard"
                        label="Password" 
                        placeholder="Enter your password" 
                        type="password"
                        fullWidth 
                        required
                    />
                    <TextField 
                        variant="standard"
                        label="Confirm password" 
                        placeholder="Confirm your password" 
                        type="password"
                        fullWidth 
                        required
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{margin: "15px 0"}}>
                        SIGN UP
                    </Button>
                </form>
            </Paper>
            
        </Grid>
    )
}

export default Signup