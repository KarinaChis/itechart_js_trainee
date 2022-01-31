import React from 'react';

import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';


import HomeIcon         from '@mui/icons-material/Home';
import GroupIcon        from '@mui/icons-material/Group';
import AccountBoxIcon   from '@mui/icons-material/AccountBox';
import LoginIcon        from '@mui/icons-material/Login';
import LogoutIcon       from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({toolbar: {...theme.headerToolbar},}))

const Header = ({ modalVisible, setModalVisible }) => {

    const classes = useStyles();

    const openModal = () => {
        setModalVisible(true)
        console.log(modalVisible)
      }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <ButtonGroup variant="text.primary" aria-label="text button group">
                    <Button startIcon={<HomeIcon />} >Home</Button>
                    <Button startIcon={<GroupIcon />}>Users</Button>
                    <Button startIcon={<AccountBoxIcon />}>Account</Button>
                </ButtonGroup>
                <Button 
                    startIcon={<LoginIcon />} 
                    color="warning" 
                    variant="text.primary"
                    onClick={() => openModal()}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;