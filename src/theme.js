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
    }
});