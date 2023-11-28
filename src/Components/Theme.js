import { createTheme } from "@mui/material";

const fontLato = ["Lato", "sans-serif"].join(', ');

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
        fontFamily: {
          fontFamily: fontLato
        },
        title: {
          fontFamily: fontLato,
          fontWeight: 900,
          fontSize: '2.5rem',
          // color: 'palette.primary.main',
          fontStyle: 'italic',
        },
        h1:{
          fontFamily: fontLato,
          fontWeight: 700,
          fontSize: '2.5rem',
          // color: '#fff',
          fontStyle: 'normal',
        },
        h2:{
          fontFamily: fontLato,
          fontWeight: 500,
          fontSize: '2rem',
          // color: '#fff',
          fontStyle: 'normal',
        },
        body:{
          fontFamily: fontLato,
          fontWeight: 400,
          fontSize: '1rem',
          // color: '#fff',
          fontStyle: 'normal',
        },
        note:{
          fontFamily: fontLato,
          fontWeight: 300,
          fontSize: '1rem',
          // color: '#fff',
          fontStyle: 'normal',
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