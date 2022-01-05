import React from 'react';

import { AppBar, Button, ButtonGroup, Toolbar} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { common } from '@mui/material/colors';




function Header(){
    return (
        <AppBar position="static">
            <Toolbar 
                width="100%"
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <ButtonGroup 
                    variant="text.primary" 
                    aria-label="text button group"
                    width="100%"
                >
                    <Button startIcon={<HomeIcon />} >Home</Button>
                    <Button startIcon={<GroupIcon />}>Users</Button>
                    <Button startIcon={<AccountBoxIcon />}>Account</Button>
                </ButtonGroup>
                <Button 
                    endIcon={<LogoutIcon />}
                    color="warning" 
                    variant="text.primary" 
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;