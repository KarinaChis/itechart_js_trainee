import React from 'react';

import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';


import HomeIcon         from '@mui/icons-material/Home';
import GroupIcon        from '@mui/icons-material/Group';
import AccountBoxIcon   from '@mui/icons-material/AccountBox';
import LogoutIcon       from '@mui/icons-material/Logout';
import { useState } from 'react';
// import SignInContainer from '../containers';

const useStyles = makeStyles((theme) => ({toolbar: {...theme.headerToolbar},}))

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <ButtonGroup variant="text.primary" aria-label="text button group">
                    <Button startIcon={<HomeIcon />} >Home</Button>
                    <Button startIcon={<GroupIcon />}>Users</Button>
                    <Button startIcon={<AccountBoxIcon />}>Account</Button>
                </ButtonGroup>
                <Button 
                    endIcon={<LogoutIcon />} 
                    color="warning" 
                    variant="text.primary"
                    onClick={() => (true)}>
                    Logout
                </Button>
            </Toolbar>
            {/* <SignInContainer visible={visible} setVisible={setVisible}/> */}
        </AppBar>
    )
}

export default Header;