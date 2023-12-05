import { createTheme, sliderClasses } from "@mui/material";

const fontLato = ["Lato", "sans-serif"].join(', ');

const Theme = createTheme({
    palette:{
        primary:{
            main:'#151819', //Black
            light:'#ffffff', //White
        },
        secondary: {
            light: '#f6efe6', //Light Orange
            lightDark: '#f5e5d0', //darker shade of the light orange
            main: '#fbb321', //Dense Orange
          },
        background: {
          default: '#f6efe6'
        }
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
        h3:{
          fontFamily: fontLato,
          fontWeight: 400,
          fontSize: '1.5rem',
          // color: '#fff',
          fontStyle: 'normal',
        },
        navButton:{
          fontFamily: fontLato,
          fontWeight: 400,
          fontSize: '1rem',
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
    components: {
        MuiButton:{
          defaultProps:{
            disableRipple: true,
          },
          variants: [
              {
                  props: {variant: 'navigation-button'},
                  style: {
                      color: '#151819',
                      "&:hover": { color:'#fbb321'}
                  }
              },
          ]
        },
    },
});

export default Theme;