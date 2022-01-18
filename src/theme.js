import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    headerToolbar: {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    footerBox: {
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        display: 'flex', 
        alignItems: 'baseline',
        height: "170px",
    },
    footerContactInfo: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    footerContact:{
        display: 'flex', 
        paddingLeft: '0'
    },
    footerContactHeader: {
        minWidth: '115px',
        maxWidth: '120px'
    },
    authTabPanel: {
        width: 280,
        margin: "5px auto"
    },
    authPaperStyle: {
        padding: "8px 20px",
        height: "58vh",
        width: 280,
        margin: "0 auto"
    },
    authAvatarStyle: {
        padding: "10px",
    },
    palette: {
        auth: "#3dc39e",
    },

});