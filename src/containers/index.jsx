import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from '@mui/styles';
import Login from "../components/Login";
import Signup from "../components/Signup";

const useStyles = makeStyles((theme) => ({ tabPanel: {...theme.authTabPanel}, }))

const SignInContainer = () => {

    const classes = useStyles();
    const [isSignUp, setSignUp] = useState(0);
    const handleChange = (event, newValue) => { setSignUp(newValue) }

    const TabPanel = (props) => {
        const { children, value, index} = props;
        return (
            <div hidden={value !== index} >
                {value === index && ( <Box> <Typography> {children} </Typography> </Box> )}
            </div>
        )
    }
    
    return (
        <Paper elevation={20} className={classes.tabPanel}>
            <Tabs value={isSignUp} onChange={handleChange}>
                <Tab label="Sign in"/>
                <Tab label="Sign up"/>
            </Tabs>
            <TabPanel value={isSignUp} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={isSignUp} index={1}>
                <Signup />
            </TabPanel>
        </Paper>
      );
}

export default SignInContainer;