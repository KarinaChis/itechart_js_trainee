import * as React from 'react';
import { Container, Link, Typography, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import LinkedInIcon         from '@mui/icons-material/LinkedIn';
import EmailIcon            from '@mui/icons-material/Email';
import InstallMobileIcon    from '@mui/icons-material/InstallMobile';

const useStyles = makeStyles((theme) => ({
    footerBox: {
        ...theme.footerBox,
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white
    },
    contactInfo: {...theme.footerContactInfo},
    contact:{...theme.footerContact},
    contactHeader: {...theme.footerContactHeader}
}))

const Footer = () => {
    
    const classes = useStyles();
    
    return (
        <footer>
            <Box className={classes.footerBox} py={{ xs:1, sm: 3 }}>
                <Container maxWidth="xs">
                    <Box borderBottom={1} py={1}>Help</Box>
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
                    <Box borderBottom={1} py={1}>Contact informations</Box>
                    <Box py={1} className={classes.contactInfo}>
                        <Box className={classes.contact}>
                            <Typography variant="body2" component="div" className={classes.contactHeader}>Phone:</Typography>
                            <Typography variant="body2" component="div">+375-22-222-22-22</Typography>
                        </Box>
                        <Box className={classes.contact}>
                            <Typography variant="body2" component="div" className={classes.contactHeader} py={0.5}>Social networks:</Typography>
                            <Typography variant="body2" component="div">
                                <IconButton size="small" sx={{ color: "white" }}><LinkedInIcon /></IconButton>
                                <IconButton size="small" sx={{ color: "white" }}><EmailIcon /></IconButton>
                                <IconButton size="small" sx={{ color: "white" }}><InstallMobileIcon /></IconButton>
                            </Typography>
                        </Box>
                        <Box className={classes.contact}>
                            <Typography variant="body2" component="div" className={classes.contactHeader}>Adress:</Typography>
                            <Typography variant="body2" component="div">Belarus, Minsk, leschinskogo str.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;