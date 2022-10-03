// pages
import Navbar from "./pages/components/Navbar/Navbar";

import {Outlet} from 'react-router-dom';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: purple[500],
    },
    text: {
      primary: '#F2F2F2',
    }
  },
});



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App


