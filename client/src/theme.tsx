import { fontSize } from '@mui/joy/styles/styleFunctionSx';
import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#8C00C7',
        },
        secondary: {
            main: '#DB00FF',
        },
        background: {
            default: '#ebebeb',
        },
        text: {
            primary: '#000000',
            secondary: '#b0b0b0',
        },
        neutral: {
            main: '#8a8888',
        }
    },
    typography: {
        fontFamily: [
            'poppins',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h5: {
            fontWeight: 500,
            fontSize: '1rem',
        }
    },
})

declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
      neutral?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      neutral: true;
    }
  }