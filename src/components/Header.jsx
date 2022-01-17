import React from 'react';

import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({toolbar: {...theme.headerToolbar},}))

export default function Header(){

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <ButtonGroup variant="text.primary" aria-label="text button group">
                    <Button startIcon={<HomeIcon />} >Home</Button>
                    <Button startIcon={<GroupIcon />}>Users</Button>
                    <Button startIcon={<AccountBoxIcon />}>Account</Button>
                </ButtonGroup>
                <Button endIcon={<LogoutIcon />} color="warning" variant="text.primary">
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}