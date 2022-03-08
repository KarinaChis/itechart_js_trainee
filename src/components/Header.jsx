import React from 'react';
import Cookies  from 'js-cookie';

import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

import HomeIcon         from '@mui/icons-material/Home';
import GroupIcon        from '@mui/icons-material/Group';
import AccountBoxIcon   from '@mui/icons-material/AccountBox';
import LoginIcon        from '@mui/icons-material/Login';
import LogoutIcon       from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction, modalVisible } from '../redux/actions/actionCreator';
import { getPosts } from '../http/userApi';

const useStyles = makeStyles((theme) => ({toolbar: {...theme.headerToolbar},}))

const Header = () => {

    const classes = useStyles();

    const isLogin = useSelector( store => store.auth.isLogin);
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(modalVisible())
    }

    const logOut = () => {
        Cookies.remove("jwtAccessToken")
        Cookies.remove("jwtRefreshToken")
        dispatch(logOutAction())
        console.log("Succesfully logout")
    }

    const getAllPosts = async () => {
        try {
            const response = await getPosts()
            if(response) {
                console.log(response)
            }
        } catch (e){ 
            console.dir(e.message)
            alert(e) }
    };

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <ButtonGroup variant="text.primary" aria-label="text button group">
                    <Button startIcon={<HomeIcon />} onClick={() => getAllPosts()}>Home</Button>
                    <Button startIcon={<GroupIcon />}>Users</Button>
                    <Button startIcon={<AccountBoxIcon />}>Account</Button>
                </ButtonGroup>
                {isLogin ? <Button 
                                endIcon={<LogoutIcon />}
                                color="warning" 
                                variant="text.primary"
                                onClick={() => logOut()}>
                                Logout
                          </Button>
                        : <Button 
                                startIcon={<LoginIcon />}
                                color="warning" 
                                variant="text.primary"
                                onClick={() => openModal()}>
                                Login
                          </Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;