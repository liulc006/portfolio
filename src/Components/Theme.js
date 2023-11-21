import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette:{
        primary:{
            main:'#FF0000',
        },
        secondary: {
            light: '#ffbc43',
            main: '#ff9500',
            dark: '#f76621',
            contrastText: '#000',
          },
    },
    typography: {
        fontFamily: 'Montserrat',
        h1: {
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#fff',
        },
        h2: {
          fontWeight: 600,
          fontSize: '2.25rem',
        },
    },
    // components: {
    //     MuiButton:{
    //         variants: [
    //             {
    //                 props: {variant: 'navigation-button'},
    //                 style: {
    //                     color: '#ffbc43'
    //                 }
    //             },
    //         ]
    //     },
    // },
});

export default Theme;