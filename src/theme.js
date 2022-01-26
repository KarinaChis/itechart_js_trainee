import { red } from '@mui/material/colors';
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
    authTabPanelBack: {
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        height: "100vh",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transform: "scale(0)"
    },
    authTabPanelActive: {
        transform: "scale(1)",
        TransformStream: ""
    },
    authTabPanel: {
        width: 280,
        margin: "30px auto",
        color: "inherit"
    },
    authPaperStyle: {
        padding: "8px 20px",
        width: 280,
        margin: "0 auto"
    },
    authAvatarStyle: {
        padding: "10px",
    },
    palette: {
        auth: "#3dc39e",
        error: red,
    },

});