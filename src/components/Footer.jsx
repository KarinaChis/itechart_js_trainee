import { Container, Link, Typography, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';


export default function Footer(){
    return (
    <footer>
        <Box 
            py={{ xs:1, sm: 3 }}
            sx={{ 
                position: 'fixed', 
                bottom: 0, left: 0, right: 0, 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'baseline',
                backgroundColor: 'primary.dark',
                color: 'common.white'
            }}
        >
            <Container maxWidth="xs">
                <Box borderBottom={1} py={1}>
                    Help
                </Box>
                <Box py={1}>
                    <Link href="/" color="inherit" variant="body2" underline="none">
                        Acceptable use policy
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit" variant="body2" underline="none">
                        Cookie policy
                    </Link>
                </Box>
                <Box py={1}> 
                    <Link href="/" color="inherit"  variant="body2" underline="none">
                        FAQ
                    </Link>
                </Box>
            </Container>
            <Container maxWidth="xs">
                <Box borderBottom={1} py={1}>
                    Contact informations
                </Box>
                <Box 
                    py={1} 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'baseline'
                    }}
                >
                    <Box sx={{ 
                        width: 200
                    }}>
                        <Typography variant="body2" component="div">
                            Phone:
                        </Typography>
                        <Typography variant="body2" component="div" py={1}>
                            Social networks:
                        </Typography>
                        <Typography variant="body2" component="div">
                            Adress:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" component="div">
                            +375-22-222-22-22
                        </Typography>
                        <Typography variant="body2" component="div">
                            <IconButton size="small" sx={{ color: "white" }}><LinkedInIcon></LinkedInIcon></IconButton>
                            <IconButton size="small" sx={{ color: "white" }}><EmailIcon></EmailIcon></IconButton>
                            <IconButton size="small" sx={{ color: "white" }}><InstallMobileIcon></InstallMobileIcon></IconButton>
                        </Typography>
                        <Typography variant="body2" component="div">
                            Belarus, Minsk, leschinskogo str.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    </footer>
)}